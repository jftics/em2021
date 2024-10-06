import { Routes } from '@angular/router';
import { LayoutInternoComponent } from './layouts/layout-interno/layout-interno.component';
import { DashboardComponent } from './formularios/dashboard/dashboard.component';
import { MapaComponent } from './formularios/mapa/mapa.component';
import { MacroComponent } from './formularios/macro/macro.component';
export const routes: Routes = [

    {
        path:'',
        component:LayoutInternoComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'mapa',
                component:MapaComponent
            },
            {
                path:'macro',
                component:MacroComponent
            },
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            }
        ]
    }

];
