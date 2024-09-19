import { Component, inject } from '@angular/core';
import { POSComponent } from "../pos/pos.component";
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [POSComponent, CommonModule],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {
  service = inject(ServiceService)

  listIngresados = this.service.getIngresados()
}
