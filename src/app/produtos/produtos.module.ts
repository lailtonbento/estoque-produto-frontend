import { ProdutosComponent } from './produtos/produtos.component';

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { AppPrimeNGModule } from '../shared/app-primeng/app-primeng.module';



@NgModule({
  declarations: [
     ProdutosComponent
    ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    AppPrimeNGModule

  ]
})
export class ProdutosModule { }
