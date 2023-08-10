import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  { path: 'subscriper', component: SubscriberComponent },
  { path: 'subscription', component: SubscriptionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
