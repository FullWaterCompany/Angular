import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { ReportsRoutingModule } from './reports-routing.module';
import { SubscriperComponent } from './subscriper/subscriper.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SubscriptionComponent } from './subscription/subscription.component';


@NgModule({
  declarations: [
    SubscriperComponent,
    InvoiceComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,MatSlideToggleModule,MatDatepickerModule,MatNativeDateModule
    


  ]
})
export class ReportsModule { }
