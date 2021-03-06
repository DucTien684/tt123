import { Injectable } from "@angular/core";

import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {

  api='https://5e9d6e040fd0b50016f75464.mockapi.io/Product1';
  


  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    //danh sách sp
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product> {
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product };
    // this.products.push(newProduct);
    // console.log(this.products);
  }

  removeProduct(id): Observable<Product> {
    return this.http.delete<Product>(`${this.api}/${id}`);
    // return this.products.filter(product => product.id != id);
  }

  editProduct() {
    // sua san pham
  }
}

