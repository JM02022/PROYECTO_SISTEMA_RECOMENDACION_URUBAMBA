import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Resenias } from './pages/resenias/resenias';

export const routes: Routes = [
    {path: '', component:Inicio,title:'Inicio'},
    {path: 'Inicio', component:Inicio,title:'Inicio'},
    {path: 'Reseñas',component:Resenias,title:'Reseñas'},
];
