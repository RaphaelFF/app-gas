import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  public cartItems: any[] = [];
  constructor(private cartService: CartService, private router: Router) {}

  goToCheckout() {
    this.router.navigate(['/checkout']); // Certifique-se de que o 'checkout' corresponda à rota definida no app-routing.module.ts
  }
}
