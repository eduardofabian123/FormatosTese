import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPidt01Component } from './form-pidt01/form-pidt01.component';

const routes: Routes = [

  {path:'',children:[{path:'form-pidt01',component:FormPidt01Component}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pidt01RoutingModule { }
