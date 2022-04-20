import { Component, OnInit} from '@angular/core';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { VendedoresService } from '../../service/vendedores/vendedores.service';
import { Vendedor } from '../model/vendedor';
import { Produto } from '../../produtos/model/produto';
import { ProdutosService } from 'src/app/service/produtos/produtos.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {
   // Tabela
   vendedores: Vendedor[] = [];
  selectedVendedores!: Vendedor[];
  produtos: Produto[] = [];

   // Dialogo
   selectedProduto!: Produto[];
   vendedorObj!: Vendedor;
   vendedorDialog!: boolean;
   submitted!: boolean;

  // View
  vendedorView!: boolean;

    items!: MenuItem[];
    ngOnInit() {
      this.items = [
        { label: 'Produtos', icon: 'pi pi-fw pi-user', url:'http://localhost:4200/produtos' },
        { label: 'Vendedores', icon: 'pi pi-fw pi-user'}
      ];

    }


   constructor(private vendedoresService: VendedoresService,private produtosService: ProdutosService, private messageService: MessageService, private confirmationService: ConfirmationService) {
     this.loadVendedores();
     this.loadProdutos();
   }

   openNew() {
     this.vendedorObj = new Vendedor();
     this.submitted = false;
     this.vendedorDialog = true;
   }
   loadVendedores() {
     this.vendedoresService.getAllPageableVendedor().subscribe(response => {
       this.vendedores = response.content;
     })
   }
   loadProdutos() {
    this.produtosService.getAllPageableProdutos().subscribe(response => {
      this.produtos = response.content;
    })
  }

   deleteSelectedVendedores() {
     this.confirmationService.confirm({
       message: 'Tem certeza de que deseja excluir os vendedores selecionados ?',
       header: 'Confirmar',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
         this.vendedoresService.deleteByIds(this.selectedVendedores.map(p => p.id!)).subscribe(() => {
           this.loadVendedores()
           this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Vendedores Deletado', life: 3000 })
         })
       }
     });
   }
   editVendedor(vendedor: Vendedor) {
     this.vendedorObj = vendedor
     this.vendedorDialog = true;
   }
   viewVendedor(vendedor: Vendedor) {
    this.vendedorObj = vendedor
    this.vendedorView = true;
  }


   deleteVendedor(vendedor: Vendedor) {
     this.confirmationService.confirm({
       message: 'Tem certeza de que deseja excluir ' + vendedor.nome + '?',
       header: 'Confirmar',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
         this.vendedoresService.deleteById(vendedor.id!).subscribe(() => {
           this.loadVendedores()
           this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Vendedor Deletado', life: 3000 })
         });
       }
     });
   }

   hideDialog() {
     this.vendedorDialog = false;
     this.submitted = false;
   }

   hideView() {
    this.vendedorView = false;
    this.submitted = false;
   }

   saveVendedor() {
     this.submitted = true
     if (!this.vendedorObj.nome) {
       this.messageService.add({ severity: 'error', summary: 'Campo não preenchido', detail: 'O campo nome não foi preenchido', life: 3000 })
     }
     this.vendedorObj.produto = this.selectedProduto
    console.log(this.selectedProduto)
     if (
       this.vendedorObj.nome
     ) {
       this.vendedoresService.upsert(this.vendedorObj).subscribe((response) => {
         console.log(response);
         this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Vendedor salvo com sucesso', life: 3000 })
         this.loadVendedores()
       })
     }
     this.hideDialog();

   }


}
