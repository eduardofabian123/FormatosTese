import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo: '/PIDT01/form-pidt01'},
  {path:'PIDT01',loadChildren:()=>import('./pidt01/pidt01.module').then(x => x.Pidt01Module)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
