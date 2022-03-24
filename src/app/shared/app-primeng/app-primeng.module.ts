import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  exports: [
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    RippleModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    FormsModule,
    InputTextModule

  ]
})
export class AppPrimeNGModule { }
