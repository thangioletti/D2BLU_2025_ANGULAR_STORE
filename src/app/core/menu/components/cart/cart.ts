import { Component } from '@angular/core';
import { CartService } from '../../../services/cart';
import { ProductType } from '../../../services/product';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  protected products!: ProductType[];

  constructor(private cartService: CartService) {
    this.cartService.cartItemsHasChanged().subscribe((products: Array<ProductType>) => {
      this.products = products;
    })
  }
}
