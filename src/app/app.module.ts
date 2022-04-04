import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { ProdutosService } from './service/produtos/produtos.service';
import { VendedoresService } from './service/vendedores/vendedores.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [ ProdutosService, VendedoresService, MessageService, ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
