import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { UpdateRoutingModule } from './update-routing.module';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RealStateComponent } from './real-state/real-state.component';


@NgModule({
  declarations: [SubscriberComponent, SubscriptionComponent, RealStateComponent],
  imports: [
    CommonModule,
    UpdateRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,MatRadioModule
  ],
  exports:[SubscriberComponent]
})
export class UpdateModule { }
