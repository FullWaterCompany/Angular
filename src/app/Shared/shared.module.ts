import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Header/header.component';


@NgModule({
  declarations: [ HeaderComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
