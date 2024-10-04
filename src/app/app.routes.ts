import { Routes } from '@angular/router';
import { LayoutInternoComponent } from './layouts/layout-interno/layout-interno.component';
import { DashboardComponent } from './formularios/dashboard/dashboard.component';
export const routes: Routes = [

    {
        path:'',
        component:LayoutInternoComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            }
        ]
    }

];
