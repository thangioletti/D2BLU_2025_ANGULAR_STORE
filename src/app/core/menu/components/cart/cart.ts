import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { CartService } from '../../../services/cart';
import { ProductOnCartType } from '../../../services/product';
import { CommonModule, CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { EmptyMessage } from "../../../empty-message/empty-message";
@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, NgTemplateOutlet, CommonModule, EmptyMessage],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  protected products!: ProductOnCartType[];
  protected cartActive = false;

  @ViewChild(EmptyMessage)
  private message!: EmptyMessage;

  constructor(private cartService: CartService) {   
    console.log("Construtor")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges", changes)
  }

  ngOnDestroy(): void {
        console.log("OnDestroy")
  }

  ngOnInit(): void {
    console.log("OnInit")
     this.cartService.cartItemsHasChanged().subscribe((products: Array<ProductOnCartType>) => {
      this.products = products;
    });
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    console.log(this.message)
  }

  

  removeItem(productId: string) {
    this.cartService.removeItemById(productId);
  }

  show() {
    this.message.onClick();
  }
}
