import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { ProductModule } from '../product/product.module';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ProductModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
