import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';

import { UpdateRoutingModule } from './update-routing.module';
import { SubscriberComponent } from './subscriber/subscriber.component';


@NgModule({
  declarations: [SubscriberComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports:[SubscriberComponent]
})
export class UpdateModule { }
