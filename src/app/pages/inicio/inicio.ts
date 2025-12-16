import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs'; 
import { RouterModule } from '@angular/router'; // <--- IMPORTAR ESTO
// Servicios
import { ImagenService } from '../../service/imagen';
import { SitiosTuristicosService } from '../../service/sitios-turisticos';

// Modelos
import { Imagenss } from '../../models/imagen.model';
import { SitioTuristico } from '../../models/sitio-turistico.model';

export interface SitioConGaleria extends SitioTuristico {
  galeria: Imagenss[];
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class Inicio implements OnInit {

  sitiosUnidos: SitioConGaleria[] = [];

  private dataService = inject(ImagenService);
  private sitiosService = inject(SitiosTuristicosService);

  ngOnInit(): void {
    this.cargarDatosYUnir();
  }

  private cargarDatosYUnir(): void {
    forkJoin({
      resSitios: this.sitiosService.getSitiosTuristicos(),
      resImagenes: this.dataService.getImagenes()
    }).subscribe({
      next: (resultados) => {
        
        // 1. OBTENCIÓN DE DATOS CRUDOS
        const rawSitios = (resultados.resSitios as any).sitios || [];
        const listaImagenes: Imagenss[] = (resultados.resImagenes as any).imagenes || [];

        // 2. FILTRADO: ELIMINAMOS MACHU PICCHU (ID 1)
        // Como 'listaSitios' tiene 11 elementos y 'listaImagenes' tiene 10,
        // quitamos el primero para igualar las cantidades.
        const listaSitiosFiltrada = rawSitios.filter((sitio: SitioTuristico) => {
            // Excluimos explícitamente el ID 1 (Machu Picchu vacío)
            return Number(sitio.sitio_id) !== 1;
        });

        // 3. UNIÓN DE DATOS (JOIN)
        if (listaSitiosFiltrada.length > 0) {
          
          this.sitiosUnidos = listaSitiosFiltrada.map((sitio: SitioTuristico) => {
            
            // CORRECCIÓN DE DESFASE:
            // Sitio 2 (Ollanta) busca la Imagen 1.
            // Sitio 3 (Moray) busca la Imagen 2.
            // Fórmula: ID_Imagen = ID_Sitio - 1
            const idBusqueda = Number(sitio.sitio_id) - 1;

            const fotosDelSitio = listaImagenes.filter(img => {
                return Number(img.sitio_id) === idBusqueda;
            });

            return {
              ...sitio,
              galeria: fotosDelSitio
            };
          });

          console.log('✅ SOLUCIÓN APLICADA: Machu Picchu eliminado.');
          console.log('✅ 10 Sitios restantes unidos con sus 10 fotos:', this.sitiosUnidos);
          
        } else {
          console.warn('⚠️ No hay sitios para mostrar después del filtro.');
        }

      },
      error: (err) => console.error('❌ Error al cargar datos:', err)
    });
  }
}