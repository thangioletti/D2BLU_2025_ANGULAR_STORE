import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm {
  protected formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  onSubmit() {
    const value = this.formGroup.value;

    if (!this.formGroup.valid) {
      alert('Preencha os campos em vermelho!');
      return;
    }

    this.productService.addProduct(value);
  }
}
