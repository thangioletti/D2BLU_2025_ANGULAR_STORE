import { Component, Input } from '@angular/core';
import { ProductService, ProductType } from '../../../../core/services/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {

  @Input()
  public product!: ProductType;

  constructor(private productService: ProductService) {}

  delete() {    
    this.productService.deleteProductById(this.product.id);
  }
}
