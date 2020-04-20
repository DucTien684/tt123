import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './Product';
@Injectable()
export class ProductService{
    api='https://5e9d6e040fd0b50016f75464.mockapi.io/Product1';
    constructor(
      private http : HttpClient
      ) { }

    getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(this.api);
    }
    getProduct(id): Observable<Product>{
      return this.http.get<Product>(`${this.api}/${id}`)
    // return this.products.find(product => product.id == id);
    }
    removeProduct(id): Observable<Product>{
        return this.http.delete<Product>(`${this.api}/${id}`);
      }
      addProduct(product){
        return this.http.post<Product>(`${this.api}`, product);
      }
      updateProduct(product){
        return this.http.put<Product>(`${this.api}/${product.id}`, product);
      }
}