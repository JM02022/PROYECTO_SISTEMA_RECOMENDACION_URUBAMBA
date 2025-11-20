import { Component, inject, OnInit } from '@angular/core';
import { ReseniasService } from '../../service/reseniasService';

@Component({
  selector: 'app-resenias',
  imports: [],
  templateUrl: './resenias.html',
  styleUrl: './resenias.css'
})
export class Resenias implements OnInit {

  private dataService = inject(ReseniasService);


  ngOnInit(): void {
    this.cargarUsuarios();
  }

  private cargarUsuarios(): void {

    this.dataService.getDatos().subscribe({
      next: (datos: any) => {
        console.log('Usuarios cargados:', datos);
      },
      error: (err) => {
        console.error('Error al cargar usuarios:', err);
      },
      complete: () => {
        console.log('Carga de usuarios completada');
      }
    });
  }
}
