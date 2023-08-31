import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  constructor(public cartService: CartService, private router: Router) {}

  goToCheckout() {
    const cartItems = this.cartService.getCartItems();
    let message = 'Pedido de Produtos:\n';

    for (const item of cartItems) {
      message += item.name + '\n';
    }

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '96984008141'; // Seu número de telefone aqui
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }
}
