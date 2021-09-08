import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';

const routes: Routes= [
    {
        path: '',           //ruta principal
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id_pais',          //subruta, o ruta hija
        component: PorPaisComponent
    },
    {
        path: '**',     //path por defecto, si entran a otra ruta que no existe, los manda a la ruta principal, tambien podria ponerse una pagina 404
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)        //rutas principales
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}