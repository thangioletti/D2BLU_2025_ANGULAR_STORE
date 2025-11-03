import { Component } from '@angular/core';
import { ProductCard } from './components/product-card/product-card';
import { ProductService, ProductType } from '../../core/services/product';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  protected products: Array<ProductType> = [];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products: Array<ProductType>) => {
      this.products = products;
    });
  }
}
