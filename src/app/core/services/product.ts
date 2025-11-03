import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private productsSubject: BehaviorSubject<Array<ProductType>> = new BehaviorSubject<Array<ProductType>>([]);
  
  constructor() {
    this.productsSubject.next([
    {
      id: 1,
      name: 'Classic Watch',
      price: 299.9,
      category: 'Acessórios',
      image:
        'https://images.unsplash.com/photo-1631863552070-7f7329017f2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMG1pbmltYWx8ZW58MXx8fHwxNzYxMDgzMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      name: 'Urban Sneakers',
      price: 449.9,
      category: 'Calçados',
      image:
        'https://images.unsplash.com/photo-1620989928625-08536e746255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc25lYWtlcnN8ZW58MXx8fHwxNzYwOTgzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      name: 'Modern Sunglasses',
      price: 199.9,
      category: 'Acessórios',
      image:
        'https://images.unsplash.com/photo-1570993492880-e8b3bfd5e100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdW5nbGFzc2VzfGVufDF8fHx8MTc2MTA4MzEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      name: 'Minimal Backpack',
      price: 349.9,
      category: 'Bolsas',
      image:
        'https://images.unsplash.com/photo-1579718091289-38794781a3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYmFja3BhY2t8ZW58MXx8fHwxNzYwOTg1NjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      name: 'Wireless Headphones',
      price: 599.9,
      category: 'Eletrônicos',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGhlYWRwaG9uZXN8ZW58MXx8fHwxNzYwOTgxMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      name: 'Urban Jacket',
      price: 799.9,
      category: 'Vestuário',
      image:
        'https://images.unsplash.com/photo-1617033298185-ab4b65511779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwamFja2V0fGVufDF8fHx8MTc2MTAxNjM3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    }]);
  }
  
  public getProducts(): Observable<Array<ProductType>> {
    return this.productsSubject.asObservable();
  }

  public getProductById(id: number): any {
    const products = this.productsSubject.getValue();
    return products.find((item: ProductType) => item.id == id);    
  }

  deleteProductById(id: number) {
    const products = this.productsSubject.getValue().filter((item: ProductType) => item.id != id);
    this.productsSubject.next(products);
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