import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { FilterModule } from '../filter/filter.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    NgbModule,
    ProductRoutingModule,
    FilterModule
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
