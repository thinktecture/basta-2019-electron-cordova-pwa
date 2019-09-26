import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { ProductListModel } from '../models/product-list.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<ProductListModel[]>{
  constructor(private readonly _productsService: ProductsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductListModel[] | Observable<ProductListModel[]> | Promise<ProductListModel[]> {
    return this._productsService.getAll();
  }

}
