import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductType } from '../../core/services/product';
import { CartService } from '../../core/services/cart';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private productId!: number;
  protected product: ProductType;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.product = this.productService.getProductById(this.productId);
  }

  addToCart() {
    this.cartService.addItem(this.product);
  }
}
