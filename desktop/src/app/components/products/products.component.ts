import { Component, OnInit } from '@angular/core';
import { ProductListModel } from 'src/app/models/product-list.model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
@Component({
  selector: 'basta-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: ProductListModel[] = [];
  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this._activatedRoute.data
    .pipe(
      take(1)
    ).subscribe((data: {products: ProductListModel[]}) => {
      this.products = data.products;
    });
  }

}
