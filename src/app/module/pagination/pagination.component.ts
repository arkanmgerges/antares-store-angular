import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  readonly viewSizesData = [60, 100, 120, 180, 200, 220];

  constructor() { }

  ngOnInit() {
  }

  viewSizes() : number[] {
    return this.viewSizesData;
  }
}
