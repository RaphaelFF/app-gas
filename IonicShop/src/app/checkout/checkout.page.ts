import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.page.html',
  styleUrls: ['checkout.page.scss'],
})
export class CheckoutPage {
  constructor(private cartService: CartService, private sanitizer: DomSanitizer) {}

  getCartItems() {
    return this.cartService.getCartItems();
  }

  getWhatsAppMessage(): SafeUrl {
    let message = 'Pedido de Produtos:\n';
    const cartItems = this.cartService.getCartItems();
  
    for (const item of cartItems) {
      message += item.name + '\n';
    }
  
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5596984008141'; // Seu número de telefone
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    return this.sanitizer.bypassSecurityTrustUrl(whatsappLink);
  }
  
  
}
