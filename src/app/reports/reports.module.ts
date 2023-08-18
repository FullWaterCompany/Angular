import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReportsRoutingModule } from './reports-routing.module';
import { SubscriperComponent } from './subscriper/subscriper.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { OneInvoiceComponent } from './one-invoice/one-invoice.component';


@NgModule({
  declarations: [
    SubscriperComponent,
    InvoiceComponent,
    SubscriptionComponent,
    OneInvoiceComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,MatSlideToggleModule,MatDatepickerModule,MatNativeDateModule,FormsModule,ReactiveFormsModule
    


  ]
})
export class ReportsModule { }
