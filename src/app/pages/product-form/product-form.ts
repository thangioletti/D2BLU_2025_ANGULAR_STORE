import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../core/services/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
})
export class ProductForm implements OnInit {
  protected formGroup!: FormGroup;
  private productId!: string;
  protected isUpdateMode: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {    
  }
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
    });

    this.productId = this.route.snapshot.paramMap.get('id') || '';

    this.initUptate();
  }


  private initUptate() {
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((product: any) => {
        this.isUpdateMode = true;
        //Forma 1
        this.formGroup.patchValue(product);
        //Forma 2
        this.formGroup.patchValue({
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
        })

        //Forma 3
        this.formGroup.get('name')?.setValue(product.name);
        this.formGroup.get('price')?.setValue(product.price);
        this.formGroup.get('category')?.setValue(product.category);
        this.formGroup.get('image')?.setValue(product.image);
      });
    }
  }

  onSubmit() {
    const value = this.formGroup.value;

    if (!this.formGroup.valid) {
      alert('Preencha os campos em vermelho!');
      return;
    }

    if (this.isUpdateMode) {
      value.id = this.productId;
      this.productService.updateProduct(value);     
    } else {
      this.productService.addProduct(value);
    }
  }
}
