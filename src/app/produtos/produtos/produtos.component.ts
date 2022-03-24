import { Produto } from './../model/produto';

import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProdutosService } from 'src/app/service/produtos/produtos.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  // Tabela
  produtos!: Produto[];
  selectedProdutos!: Produto[];

  // Dialogo
  produtoObj!: Produto;
  produtoDialog!: boolean;
  submitted!: boolean;


  constructor(private produtosService: ProdutosService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    this.loadProdutos();
  }

  openNew() {
    this.produtoObj = new Produto();
    this.submitted = false;
    this.produtoDialog = true;
  }
  loadProdutos() {
    this.produtosService.getAllPageableProdutos().subscribe(response => {
      this.produtos = response.content;
    })
  }

  deleteSelectedProdutos() {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir os produtos selecionados ?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtosService.deleteByIds(this.selectedProdutos.map(p => p.id)).subscribe(() => {
          this.loadProdutos()
          this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Produto Deletado', life: 3000 })
        })
      }
    });
  }
  editProduto(produto: Produto) {
    this.produtoObj = produto
    this.produtoDialog = true;
  }


  deleteProduto(produto: Produto) {
    this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir ' + produto.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.produtosService.deleteById(produto.id).subscribe(() => {
          this.loadProdutos()
          this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Produto Deletado', life: 3000 })
        });
      }
    });
  }

  hideDialog() {
    this.produtoDialog = false;
    this.submitted = false;
  }

  saveProduto() {
    this.submitted = true
    if (!this.produtoObj.nome) {
      this.messageService.add({ severity: 'error', summary: 'Campo não preenchido', detail: 'O campo nome não foi preenchido', life: 3000 })
    }
    if (!this.produtoObj.marca) {
      this.messageService.add({ severity: 'error', summary: 'Campo não preenchido', detail: 'O campo marca não foi preenchido', life: 3000 })
    }
    if (!this.produtoObj.revendedor) {
      this.messageService.add({ severity: 'error', summary: 'Campo não preenchido', detail: 'O campo revendedor não foi preenchido', life: 3000 })
    }

    if (
      this.produtoObj.nome &&
      this.produtoObj.marca &&
      this.produtoObj.revendedor
    ) {
      this.produtosService.upsert(this.produtoObj).subscribe((response) => {
        console.log(response);
        this.messageService.add({ severity: 'Sucesso', summary: 'Bem-sucedido', detail: 'Produto salvo com sucesso', life: 3000 })
        this.loadProdutos()
      })
    }
    this.hideDialog();

  }



}



