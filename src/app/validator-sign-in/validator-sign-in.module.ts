import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidatorSignInRoutingModule } from './validator-sign-in-routing.module';
import { ValidatorSignInComponent } from './components/validator-sign-in/validator-sign-in.component';


@NgModule({
  declarations: [
    ValidatorSignInComponent
  ],
  imports: [
    CommonModule,
    ValidatorSignInRoutingModule
  ]
})
export class ValidatorSignInModule { }
