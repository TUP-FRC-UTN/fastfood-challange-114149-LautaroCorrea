import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { Pedido } from '../Models/Pedido';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  service = inject(ServiceService);

  listCocinados = this.service.getCocinados();
  
  EntregarPedido(pedido : Pedido) {
    this.service.sended(pedido);
  }
}
