import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  {
    path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'vendedores',
    loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
