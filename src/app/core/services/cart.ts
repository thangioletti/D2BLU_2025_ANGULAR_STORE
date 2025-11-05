import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductOnCartType } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private cartItems = new BehaviorSubject<Array<ProductOnCartType>>([]);

  public addItem(item: ProductOnCartType): void {
    let cartItems = this.cartItems.getValue();

    const alreadyOnCart = cartItems.find(el => el.id == item.id);
    if (alreadyOnCart) {
      alreadyOnCart.quantity = parseInt(`${alreadyOnCart.quantity || 0}`) + parseInt(`${(item.quantity || 0)}`);
    } else {
      cartItems.push(item);
    }
    this.cartItems.next(cartItems);    
  }

  public cartItemsHasChanged() : Observable<Array<ProductOnCartType>> {
    return this.cartItems.asObservable();
  }

  removeItemById(productId: number) {
    let products = this.cartItems.getValue();
    console.log(products);    
    products = products.filter((el) => el.id != productId);
    console.log(products)
    this.cartItems.next(products);
  }
}
