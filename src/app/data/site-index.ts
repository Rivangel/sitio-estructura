export type SiteItemType = 'pagina' | 'seccion'
export type SiteItem = {
    id: string;
    tittle: string;
    description: string;
    path: string;
    type: SiteItemType;
    section: string;
    keywords: string[];
    otro?: String;


};


export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        tittle: 'Inicio',
        description: 'Pagina principal del sitio de practica',
        path: '/',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['inicio', 'home', 'principal', 'principal', 'estructura'],
        otro: 'asdas'
    },
    {
        id: 'elementos',
        tittle: 'Elementos del sitio',
        description: 'Identifica los elementos que componen un sitio web.',
        path: '/elementos',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'sitio', 'header', 'footer', 'main', 'layout']
    },
    {
        id: 'menu',
        tittle: 'Menu',
        description: 'Elementos principales del menu web y su utilidad.',
        path: '/menu',
        type: 'pagina',
        section: 'Navegacion',
        keywords: ['elementos', 'navegacion', 'navbar', 'links', 'persistente']
    },
    {
        id: 'breadcrumbs',
        tittle: 'Breadcrumbs',
        description: 'Describe el funcionamiento y utilidad de los breadcrumbs.',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegacion',
        keywords: ['breadcrumbs', 'migas', 'rutas', 'navegacion', 'ux']
    },
    {
        id: 'mapa',
        tittle: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relacion con la navegacion.',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['elementos', 'sitio', 'sitemap', 'estructura', 'rutas']
    },
    {
        id: 'error404',
        tittle: 'Error 404',
        description: 'Pagina para rutas no existentes.',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['404', 'error', 'no encontrado', 'ruta']
    }
]

