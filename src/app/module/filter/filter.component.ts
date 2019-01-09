import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  readonly filterData = [
    {
      name: "Category",
      items: [
        { filterCode: "cat-tv", filterName: "T-Shirt & Vests" },
        { filterCode: "cat-acc", filterName: "Accessories" },
        { filterCode: "cat-coat-jacket", filterName: "Coats & Jackets" },
        { filterCode: "cat-shirt", filterName: "Shirts" },
        { filterCode: "cat-jeans", filterName: "Jeans" },
        { filterCode: "cat-tr", filterName: "Trousers" },
        { filterCode: "cat-suit", filterName: "Suits" },
        { filterCode: "cat-hoodie-swt", filterName: "Hoodies & Sweatshirts" },
        { filterCode: "cat-under", filterName: "Underwear" },
        { filterCode: "cat-jump-card", filterName: "Jumpers & Cardigans" },
        { filterCode: "cat-bag", filterName: "Bags" },
        { filterCode: "cat-pol-shirt", filterName: "Polo Shirts" },
        { filterCode: "cat-jogger", filterName: "Joggers" },
        { filterCode: "cat-short", filterName: "Shorts" },
        { filterCode: "cat-sunglass", filterName: "Sunglasses" },
        { filterCode: "cat-jewel", filterName: "Jewellery" },
        { filterCode: "cat-loung-pijama", filterName: "Loungwear / Pyjamas" },
        { filterCode: "cat-blazer", filterName: "Blazers" },
        { filterCode: "cat-watch", filterName: "Watches" },
        { filterCode: "cat-bag-purses", filterName: "Bags & Purses" }
      ]
    },
    {
      name: "Fit",
      items: [
        {
          filterCode: "fit-regular", filterName: "Regular Fit"
        },
        {
          filterCode: "fit-slim", filterName: "Slim Fit"
        },
        { filterCode: "fit-bit-tall", filterName: "Bit & Tall" },
        { filterCode: "fit-skinny", filterName: "Skinny Fit" },
        { filterCode: "fit-super-skin", filterName: "Super Skinny Fit" },
        { filterCode: "fit-tailored", filterName: "Tailored Fit" },
        { filterCode: "fit-wide", filterName: "Wide Fit" },
        { filterCode: "fit-longline", filterName: "Longline" },
        { filterCode: "fit-oversize", filterName: "Oversized Fit" },
        { filterCode: "fit-short", filterName: "Shorter Length" },
        { filterCode: "fit-tapered", filterName: "Tapered Fit" }
      ]
    },
    {
      name: "Design",
      items: [
        { filterCode: "des-camo", filterName: "Camo" },
        { filterCode: "des-check", filterName: "Check" },
        { filterCode: "des-floral", filterName: "Floral" }
      ],
    },
    {
      name: "Size",
      items: [
        { filterCode: "s-xxs", filterName: "XXS" },
        { filterCode: "s-xs", filterName: "XS" },
        { filterCode: "s-s", filterName: "S" },
        { filterCode: "s-m", filterName: "M" },
        { filterCode: "s-l", filterName: "L" },
        { filterCode: "s-xl", filterName: "XL" },
        { filterCode: "s-xxl", filterName: "XXL" },
        { filterCode: "s-xxxl", filterName: "XXXL" },
        { filterCode: "s-xxxxl", filterName: "XXXXL" },
        { filterCode: "s-xxxxxl", filterName: "XXXXXL" },
        { filterCode: "s-one-size", filterName: "One Size" },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }


  filters() : {name: string, items: any[]}[] {
    return this.filterData;
  }
}
