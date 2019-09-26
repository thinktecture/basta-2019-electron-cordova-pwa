import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductDetailsModel } from '../models/product-details.model';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductDetailsModel>{
  constructor(private readonly _productsService: ProductsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProductDetailsModel | Observable<ProductDetailsModel> | Promise<ProductDetailsModel> {
    const id = route.paramMap.get('id');
    return this._productsService.getById(id);
  }

}
