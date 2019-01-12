import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { FilterModule } from '../filter/filter.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './store/product.effect';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    NgbModule,
    ProductRoutingModule,
    FilterModule,
    EffectsModule.forRoot([ProductEffect]),
  ],
  exports: [ProductListComponent]
})
export class ProductModule { }
