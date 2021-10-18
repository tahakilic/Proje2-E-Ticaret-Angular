import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Product} from "../product/product";
import {Observable, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Category} from "../category/category";

@Injectable() //root koymadık sadece belirli componentlerde çalışsın diye
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  path="http://localhost:3000/products"

  getProducts():Observable<Product[]>{  //observable subscribe görene kadar işlem bitmez
    return this.httpClient.get<Product[]>(this.path).pipe(
      tap(data=>console.warn(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getProductsByCategory(categoryId:Category):Observable<Product[]>{  //observable subscribe görene kadar işlem bitmez
    return this.httpClient.get<Product[]>(this.path+"?categoryId="+categoryId).pipe(
      tap(data=>console.warn(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  addProduct(product:Product):Observable<Product>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization":"Token"
      })
    }
    return this.httpClient.post<Product>(this.path,product,httpOptions).pipe(
      tap(data=>console.warn(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse){
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu"+err.error.message
    }else {
      errorMessage="Sistemsel Bir Hata"
    }
    return throwError(errorMessage);
  }
}
