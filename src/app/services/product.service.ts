import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../products';
import { Observable,throwError } from 'rxjs';
import {catchError} from  'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url: string = '/assets/data/product.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url)
    // .catchError(this.handleError)
    ; //Original server url can be placed here
  }

  // handleError(error: HttpErrorResponse) {
  //   return Observable.throwError(error.message || "Server Error");
  // }
}
