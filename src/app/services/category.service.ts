import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Product} from "../product/product";
import {catchError, tap} from "rxjs/operators";
import {Category} from "../category/category";

@Injectable()
export class CategoryService {


  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{  //observable subscribe görene kadar işlem bitmez
    return this.httpClient.get<Category[]>("http://localhost:3000/categories").pipe(
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
