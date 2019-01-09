import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { PaginationModule } from '../pagination/pagination.module';
import { FilterModule } from '../filter/filter.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PaginationModule,
    FilterModule
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
