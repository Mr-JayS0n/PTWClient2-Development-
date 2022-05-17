import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorDashboardRoutingModule } from './validator-dashboard-routing.module';
import { ValidatorDashboardComponent } from './components/validator-dashboard/validator-dashboard.component';


@NgModule({
  declarations: [
    ValidatorDashboardComponent
  ],
  imports: [
    CommonModule,
    ValidatorDashboardRoutingModule
  ]
})
export class ValidatorDashboardModule { }
