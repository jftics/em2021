import { Routes } from '@angular/router';
import { LayoutInternoComponent } from './layouts/layout-interno/layout-interno.component';
import { DashboardComponent } from './formularios/dashboard/dashboard.component';
import { DesagregadoComponent } from './formularios/desagregado/desagregado.component';

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
                path:'desagregado',
                component:DesagregadoComponent,
                pathMatch: 'full'
            }
        ]
    }

];
