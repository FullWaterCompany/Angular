import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './Shared/shared.module';
import { SubscriberComponent } from './Update/subscriber/subscriber.component';
import { UpdateModule } from './Update/update.module';


const routes: Routes = [

    { path: 'update', loadChildren: () => import('./Update/update.module').then(m => m.UpdateModule) },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
