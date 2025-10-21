import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart';
import { ProductType } from '../services/product';
import { Cart } from "./components/cart/cart";

@Component({
  selector: 'app-menu',
  imports: [RouterLink, Cart],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  protected productQtd: number = 0;

  constructor(private cartService: CartService) {
    this.cartService.cartItemsHasChanged().subscribe((products: Array<ProductType>) => {
      this.productQtd = products.length;
    })
  }


}
