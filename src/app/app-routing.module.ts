import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';

const routes: Routes = [
  { path: 'cabecera', component: CabeceraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
