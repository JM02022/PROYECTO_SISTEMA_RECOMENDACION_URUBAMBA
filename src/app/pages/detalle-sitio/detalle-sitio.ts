import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router'; // 1. Para leer la URL
import { forkJoin } from 'rxjs';

// Servicios
import { ImagenService } from '../../service/imagen';
import { SitiosTuristicosService } from '../../service/sitios-turisticos';

// Modelos (Reutilizamos la interfaz que creaste)
import { Imagenss } from '../../models/imagen.model';
import { SitioTuristico } from '../../models/sitio-turistico.model';

// Definimos la interfaz aquí también o impórtala si la tienes en un archivo aparte
export interface SitioConGaleria extends SitioTuristico {
  galeria: Imagenss[];
}

@Component({
  selector: 'app-detalle-sitio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-sitio.html', // Asegúrate de tener este archivo
  styleUrls: ['./detalle-sitio.css']
})
export class DetalleSitio implements OnInit {

  // Variable para guardar el sitio encontrado
  sitio: SitioConGaleria | null = null;
  loading: boolean = true; // Para mostrar un "Cargando..."

  private route = inject(ActivatedRoute); // Inyectamos la ruta activa
  private dataService = inject(ImagenService);
  private sitiosService = inject(SitiosTuristicosService);

  ngOnInit(): void {
    // 1. OBTENER EL ID DE LA URL
    // Si la ruta es /DetalleSitio/2, esto nos da "2"
    const idUrl = this.route.snapshot.paramMap.get('id');

    if (idUrl) {
      this.cargarDetalle(Number(idUrl));
    }
  }

  private cargarDetalle(idSitio: number): void {
    this.loading = true;

    forkJoin({
      resSitios: this.sitiosService.getSitiosTuristicos(),
      resImagenes: this.dataService.getImagenes()
    }).subscribe({
      next: (resultados) => {
        
        const rawSitios = (resultados.resSitios as any).sitios || [];
        const listaImagenes: Imagenss[] = (resultados.resImagenes as any).imagenes || [];

        // 2. BUSCAR EL SITIO ESPECÍFICO
        const sitioEncontrado = rawSitios.find((s: SitioTuristico) => Number(s.sitio_id) === idSitio);

        if (sitioEncontrado) {
            
            // 3. APLICAR TU LÓGICA DE UNIÓN (ID - 1)
            // Si el sitio es 2 (Ollantaytambo), buscamos imágenes con sitio_id = 1
            const idBusquedaImagen = Number(sitioEncontrado.sitio_id) - 1;

            const fotosDelSitio = listaImagenes.filter(img => {
                return Number(img.sitio_id) === idBusquedaImagen;
            });

            // 4. GUARDAR EN LA VARIABLE PARA USAR EN EL HTML
            this.sitio = {
                ...sitioEncontrado,
                galeria: fotosDelSitio
            };
            
            console.log('✅ Sitio cargado en detalle:', this.sitio);
        } else {
            console.error('❌ No se encontró el sitio con ID:', idSitio);
        }
        
        this.loading = false;
      },
      error: (err) => {
        console.error('Error cargando detalle:', err);
        this.loading = false;
      }
    });
  }
}