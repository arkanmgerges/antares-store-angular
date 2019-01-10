import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  readonly viewSizesData = [60, 100, 120, 180, 200, 220];

  constructor() { }

  ngOnInit() {
  }

  viewSizes(): number[] {
    return this.viewSizesData;
  }
}
