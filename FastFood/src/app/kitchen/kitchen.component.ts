import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { Pedido } from '../Models/Pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  service = inject(ServiceService);
  listPedidos = this.service.getPedidos();
  enCoccion? : Pedido = undefined;
  listCocinados = this.service.getCocinados();

  CocinarPedido(pedido : Pedido){
      if (this.enCoccion == null){
      this.enCoccion = pedido;
      this.service.delete(pedido);
      } 
      else {
      alert("Ya hay un pedido en cocción");
      }
  }

  pedidoCocinado(){
    this.service.addCocinado(this.enCoccion!);
    this.enCoccion = undefined;
  }
}
