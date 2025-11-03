import { Component } from '@angular/core';
import { CartService } from '../../../services/cart';
import { ProductOnCartType } from '../../../services/product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  protected products!: ProductOnCartType[];

  constructor(private cartService: CartService) {
    this.cartService.cartItemsHasChanged().subscribe((products: Array<ProductOnCartType>) => {
      this.products = products;
    })
  }
}
