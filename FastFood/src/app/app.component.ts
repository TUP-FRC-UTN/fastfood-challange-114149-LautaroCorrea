import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, KitchenComponent, DeliveryPointComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFood';
}
