import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  

  private productsMustBeReloadedSubject: Subject<boolean> = new Subject();
  private productsSubject: BehaviorSubject<Array<ProductType>> = new BehaviorSubject<Array<ProductType>>([]);
  
  constructor(private http: HttpClient) {        
  }
  
  public reloadProductList() {
    this.productsMustBeReloadedSubject.next(true);
  }

  public productsMustBeReloaded(): Observable<boolean> {
    return this.productsMustBeReloadedSubject.asObservable();
  }

  public getProducts(): Observable<any> {
    return this.http.get("http://localhost:3000/products");
  }

  public getProductById(id: number): any {
    return this.http.get(`http://localhost:3000/products/${id}`);    
  }

  public deleteProductById(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  public addProduct(value: Partial<ProductType>) {
    let maxId = 0;
    const products = this.productsSubject.getValue();
    products.forEach((el) => {
      if (el.id > maxId) {
        maxId = el.id;
      }
    });

    value.id = maxId+1;

    this.http.post("http://localhost:3000/products", value).subscribe(() => {
      alert("Produto inserido!");
      this.reloadProductList();
    });    
  }
}

export interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductOnCartType extends ProductType {
  quantity?: number;
  observations?: string;
}