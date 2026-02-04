import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Breadcrumbs } from './pages/breadcrumbs/breadcrumbs';
import { ElementosSitio } from './pages/elementos-sitio/elementos-sitio';
import { Error404 } from './pages/error-404/error-404';
import { MapaSitio } from './pages/mapa-sitio/mapa-sitio';
import { Menu } from './pages/menu/menu';
import { Busqueda } from './pages/busqueda/busqueda';

export const routes: Routes = [

    {
        path: '',
        component: Inicio,
        pathMatch: 'full'
    },

    {
        path: 'elementos',
        component: ElementosSitio,

    },

    {
        path: 'breadcrumbs',
        component: Breadcrumbs,

    },

    {
        path: 'mapa-sitio',
        component: MapaSitio,

    },

    {
        path: 'menu',
        component: Menu,

    },

    {
        path: 'busqueda',
        component: Busqueda,

    },

    {
        path: '**',
        component: Error404,

    },

];
