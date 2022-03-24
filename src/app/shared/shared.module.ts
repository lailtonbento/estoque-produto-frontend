import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrimeNGModule } from './app-primeng/app-primeng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppPrimeNGModule,
  ]
})
export class SharedModule { }
