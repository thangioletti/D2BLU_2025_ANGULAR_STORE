import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, ProductType } from '../../core/services/product';
import { CartService } from '../../core/services/cart';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-detail',
  imports: [ReactiveFormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail {
  private productId!: number;
  protected product: ProductType;
  protected formGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.product = this.productService.getProductById(this.productId);

    this.formGroup = this.formBuilder.group({
      quantity: ['1'],
      observations: ['teste', Validators.required]
    });

    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.formGroup.get('quantity')?.valueChanges.subscribe((value) => {
      console.log('Quantity changed:', value);
      if (value < 1) {
        this.formGroup.get('observations')?.disable();
      } else {
        this.formGroup.get('observations')?.enable();      
      }
    });
  }

  addToCart() {

    if (this.formGroup.invalid) {
      alert('Por favor, preencha os campos corretamente.');
      return;
    }

    this.cartService.addItem({
      ...this.product,
      ...this.formGroup.value
    });
  }
}
