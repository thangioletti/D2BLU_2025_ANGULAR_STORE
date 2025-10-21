import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input()
  public image: any;
  @Input()
  public category: any;
  @Input()
  public name: any;
  @Input()
  public price: any;
}
