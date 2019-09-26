import { Component, OnInit } from '@angular/core';
import { ProductDetailsModel } from 'src/app/models/product-details.model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'basta-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: ProductDetailsModel = null;
  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this._activatedRoute.data
    .pipe(
    ).subscribe((data: {product: ProductDetailsModel}) => {
      console.info('loaded product with id ' +data.product.id);
      this.product = data.product;
    });
  }

}
