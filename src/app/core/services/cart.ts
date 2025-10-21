import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductType } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<Array<ProductType>>([]);

  public addItem(item: ProductType): void {
    let cartItems = this.cartItems.getValue();
    cartItems.push(item);
    this.cartItems.next(cartItems);
    console.log(cartItems)
  }

  public cartItemsHasChanged() : Observable<Array<ProductType>> {
    return this.cartItems.asObservable();
  }
}
