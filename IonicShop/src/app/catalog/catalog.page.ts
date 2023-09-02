import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: 'catalog.page.html',
  styleUrls: ['catalog.page.scss'],
})
export class CatalogPage {
  products: Product[] = [
    { id: 1, name: 'Gas = tamanho grande', quantity: 'https://github.com/RaphaelFF/teste/blob/main/assets/IMG_1999.JPG?raw=true' }, // Certifique-se de incluir a propriedade quantity
    { id: 2, name: 'Produto 2', quantity:  'aula'}, // Certifique-se de incluir a propriedade quantity
    { id: 3, name: 'Produto 3', quantity:  'aula'}, // Certifique-se de incluir a propriedade quantity
    // ...
  ];

  constructor(public cartService: CartService, public router: Router) {}

  toggleProduct(product: Product) {
    if (this.cartService.isInCart(product)) {
      this.cartService.removeFromCart(product);
    } else {
      this.cartService.addToCart(product);
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
