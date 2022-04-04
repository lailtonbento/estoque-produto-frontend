import { VendedorComponent } from './vendedor/vendedor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendedorRoutingModule } from './vendedor-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppPrimeNGModule } from 'src/app/shared/app-primeng/app-primeng.module';



@NgModule({
  declarations: [
     VendedorComponent
    ],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    SharedModule,
    AppPrimeNGModule

  ]
})
export class VendedorModule { }
