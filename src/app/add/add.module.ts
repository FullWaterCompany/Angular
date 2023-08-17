import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { AddRoutingModule } from './add-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';


@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports:[
    InvoiceComponent
  ]
})
export class AddModule { }
