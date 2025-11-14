import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product-detail/product-detail';
import { ProductForm } from './pages/product-form/product-form';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: 'products', component: Products},    
    { path: 'product/:id', component: ProductDetail},
    { path: 'product-form', component: ProductForm },
    { path: 'product-form/:id', component: ProductForm }
];
