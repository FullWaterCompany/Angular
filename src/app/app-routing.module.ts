import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Shared/home-page/home-page.component';


const routes: Routes = [

    { path: 'update', loadChildren: () => import('./Update/update.module').then(m => m.UpdateModule) },
    { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) },
    { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
    { path: '', component:HomePageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
