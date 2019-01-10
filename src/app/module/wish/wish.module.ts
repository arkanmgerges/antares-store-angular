import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishComponent } from './wish.component';
import { WishRoutingModule } from './wish-routing.module';

@NgModule({
  declarations: [WishComponent],
  imports: [
    CommonModule,
    WishRoutingModule
  ]
})
export class WishModule { }
