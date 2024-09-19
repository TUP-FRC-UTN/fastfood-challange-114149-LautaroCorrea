import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormsModule, NgForm} from '@angular/forms';
import { Pedido } from '../Models/Pedido';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  

  servicio = inject(ServiceService);

  pedido = new Pedido();

  enviarPedido(form: NgForm) {
      if (form.valid){
        this.pedido.name = form.value.name
        this.pedido.description = form.value.description
        this.servicio.add(this.pedido)
        this.servicio.addIngresados(this.pedido)
        console.log(form.value)
        this.pedido = new Pedido()
        form.resetForm()
      }
    }
}
