import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriperComponent } from '../reports/subscriper/subscriper.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OneInvoiceComponent } from './one-invoice/one-invoice.component';

const routes: Routes = [
  {path:'subscriper',component:SubscriperComponent},
  {path:'subscription',component:SubscriptionComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'oneInvoice',component:OneInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
