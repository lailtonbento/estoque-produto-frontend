import { Routes, RouterModule } from '@angular/router';
import { VendedorComponent } from './vendedor/vendedor.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: VendedorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule {}
