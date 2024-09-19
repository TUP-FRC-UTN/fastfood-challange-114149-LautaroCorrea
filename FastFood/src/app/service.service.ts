import { Injectable } from '@angular/core';
import { Pedido } from './Models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  listPedidos : Pedido[] = [];
  listCocinados : Pedido[] = [];
  listIngresados : Pedido[] = [];

  add(pedido : Pedido){
    this.listPedidos.push(pedido);
  }

  addIngresados(pedido : Pedido){
    this.listIngresados.push(pedido);
  }

  addCocinado(pedido : Pedido){
    this.listCocinados.push(pedido);
  }


  getPedidos(){
    return this.listPedidos;
  }

  getCocinados(){
    return this.listCocinados;
  }

  getIngresados(){
    return this.listIngresados;
  }
  delete(pedido : Pedido){
    let index = this.listPedidos.indexOf(pedido);
    if (index > -1){
      this.listPedidos.splice(index, 1);
    }
  }

  sended(pedido : Pedido){
    let index = this.listCocinados.indexOf(pedido);
    if (index > -1){
      this.listCocinados.splice(index, 1);
    }
  }
}
