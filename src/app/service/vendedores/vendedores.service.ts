import { Vendedor } from '../../vendedor/model/vendedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/produtos/model/page/page.interface';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/v1/vendedores'


  public getAllPageableVendedor(page = 0, size?: number) {
    return this.httpClient.get<Page<Vendedor>>(`${this.API}?page=${page}${size ? `&size=${size}` : ``}`);
  }
  public getAllVendedores(){
    return this.httpClient.get<Vendedor[]>(`${this.API}/all`)
  }

  public update(vendedor: Vendedor) {
    return this.httpClient.put<Vendedor>(`${this.API}/${vendedor.id}`, vendedor)

  }

  public save(vendedor: Vendedor) {
    return this.httpClient.post<Vendedor>(`${this.API}`, vendedor)

  }
  public upsert(vendedor: Vendedor) {
    if (vendedor.id) {
      return this.update(vendedor)
    } else {
      return this.save(vendedor)
    }
  }

  public deleteById(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
  }

  public deleteByIds(ids: Array<Number>){
    return this.httpClient.delete(`${this.API}/?ids=${ids.join(",")}`)
  }

}
