import { Vendedor } from '../../vendedor/model/vendedor';
export class Produto{
  id?: number;
  nome?: string;
  marca?: string;
  revendedor?: string;
  vendedores?: Vendedor[]
}
