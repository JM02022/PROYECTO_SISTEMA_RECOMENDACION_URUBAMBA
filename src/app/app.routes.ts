import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Resenias } from './pages/resenias/resenias';
import { RegistroUsuario } from './pages/registro-usuario/registro-usuario';
import { LoginUsuario } from './pages/login-usuario/login-usuario';
import { PanelUsuario } from './pages/panel-usuario/panel-usuario';
import { GestionSitios } from './pages/gestion-sitios/gestion-sitios';
import { FormularioResenia } from './pages/formulario-resenia/formulario-resenia';
import { FavoritosUsuario } from './pages/favoritos-usuario/favoritos-usuario';
import { BusquedaAvanzanda } from './pages/busqueda-avanzanda/busqueda-avanzanda';
import { DetalleSitio } from './pages/detalle-sitio/detalle-sitio';

export const routes: Routes = [
    // 1. Ruta por defecto (vacía)
    { path: '', component: Inicio, title: 'Inicio' },

    // 2. Rutas específicas (Angular busca aquí primero)
    { path: 'Inicio', component: Inicio, title: 'Inicio' },
    { path: 'Reseñas', component: Resenias, title: 'Reseñas' },
    { path: 'RegistroUsuario', component: RegistroUsuario, title: 'RegistroUsuario' },
    { path: 'Login', component: LoginUsuario, title: 'Login' },
    { path: 'PanelUsuario', component: PanelUsuario, title: 'PanelUsuario' },
    { path: 'GestionSitios', component: GestionSitios, title: 'GestionSitios' },
    { path: 'FormularioResenia', component: FormularioResenia, title: 'FormularioResenia' },
    { path: 'FavoritosUsuario', component: FavoritosUsuario, title: 'FavoritosUsuario' },
    { path: 'BusquedaAvanzada', component: BusquedaAvanzanda, title: 'BusquedaAvanzada' },
    
    // IMPORTANTE: Definiste 'DetalleSitio' (con mayúsculas aquí)
    { path: 'DetalleSitio/:id', component: DetalleSitio },

    // 3. Comodín (SIEMPRE AL ÚLTIMO)
    // "Si no coincidió con ninguna de las anteriores, ve a Inicio"
    { path: '**', component: Inicio, title: 'Inicio' },
];