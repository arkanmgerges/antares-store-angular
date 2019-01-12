import { Component, OnInit } from '@angular/core';
import { AppState, PRODUCT_STATE_KEY } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { ListAction } from '../store/product.action';
import { ProductState } from '../store/product.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  readonly viewSizesData = [60, 100, 120, 180, 200, 220];
  products$: Observable<ProductState>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new ListAction());
    this.products$ = this.store.select(PRODUCT_STATE_KEY);
  }

  viewSizes(): number[] {
    return this.viewSizesData;
  }
}
