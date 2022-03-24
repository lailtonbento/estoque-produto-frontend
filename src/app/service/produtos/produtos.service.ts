import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/produtos/model/page/page.interface';

import { Produto } from '../../produtos/model/produto';



@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/produtos'

  public getAllPageableProdutos(page = 0, size?: number) {
    return this.httpClient.get<Page<Produto>>(`${this.API}?page=${page}${size ? `&size=${size}` : ``}`);
  }

  public update(produto: Produto) {
    return this.httpClient.put<Produto>(`${this.API}/${produto.id}`, produto)

  }

  public save(produto: Produto) {
    return this.httpClient.post<Produto>(`${this.API}`, produto)

  }
  public upsert(produto: Produto) {
    if (produto.id) {
      return this.update(produto)
    } else {
      return this.save(produto)
    }
  }

  public deleteById(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  public deleteByIds(ids: Array<Number>){
    return this.httpClient.delete(`${this.API}/?ids=${ids.join(",")}`)
  }

}

