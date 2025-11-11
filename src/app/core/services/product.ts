import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsMustBeReloadedSubject: Subject<boolean> = new Subject();
  private productsSubject: BehaviorSubject<Array<ProductType>> = new BehaviorSubject<
    Array<ProductType>
  >([]);

  constructor(private http: HttpClient, private router: Router) {}

  public reloadProductList() {
    this.productsMustBeReloadedSubject.next(true);
  }

  public productsMustBeReloaded(): Observable<boolean> {
    return this.productsMustBeReloadedSubject.asObservable();
  }

  public getProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products');
  }

  public getProductById(id: string): any {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  public deleteProductById(id: string) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  public addProduct(value: Partial<ProductType>) {
    this.getProducts().subscribe((products) => {
      let maxId = 0;      
      products.forEach((el: any) => {
        if (parseInt(el.id) > maxId) {
          maxId = parseInt(el.id);
        }
      });
      maxId = maxId+1;
      
      value.id = `${maxId}`;
      this.http.post('http://localhost:3000/products', value).subscribe(() => {
        alert('Produto inserido!');
        this.reloadProductList();
        this.router.navigate(['/products']);

      });
    });
  }
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductOnCartType extends ProductType {
  quantity?: number;
  observations?: string;
}
