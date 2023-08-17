import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriberComponent } from './subscriber/subscriber.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { RealStateComponent } from './real-state/real-state.component';

const routes: Routes = [
  { path: 'subscriper', component: SubscriberComponent },
  { path: 'subscription', component: SubscriptionComponent},
  { path: 'realState', component: RealStateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateRoutingModule { }
