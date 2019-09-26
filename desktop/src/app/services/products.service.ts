import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductListModel } from '../models/product-list.model';
import { ProductDetailsModel } from '../models/product-details.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  constructor(private readonly _http: HttpClient){

  }

  public getAll(): Observable<ProductListModel[]>{
    return this._http.get<ProductListModel[]>(environment.apiRoot);
  }

  public getById(id: string): Observable<ProductDetailsModel>{
    return this._http.get<ProductDetailsModel>(`${environment.apiRoot}/${id}`);
  }
}
