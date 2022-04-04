import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import {TabMenuModule} from 'primeng/tabmenu';
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
    InputTextModule,
    ListboxModule,
    ToastModule,
    MenuModule,
    BreadcrumbModule,
    TabMenuModule

  ]
})
export class AppPrimeNGModule { }
