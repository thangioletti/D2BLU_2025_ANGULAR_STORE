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
    cartItems.push(item);
    this.cartItems.next(cartItems);
    console.log(cartItems)
  }

  public cartItemsHasChanged() : Observable<Array<ProductOnCartType>> {
    return this.cartItems.asObservable();
  }
}
