import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CoreRoutingModule,
    ProductModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
