import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pidt01RoutingModule } from './pidt01-routing.module';
import { FormPidt01Component } from './form-pidt01/form-pidt01.component';


@NgModule({
  declarations: [
    FormPidt01Component
  ],
  imports: [
    CommonModule,
    Pidt01RoutingModule
  ]
})
export class Pidt01Module { }
