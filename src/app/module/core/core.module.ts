import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoreRoutingModule } from './core-routing.module';
import { ProductModule } from '../product/product.module';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthEffect } from './auth/store/auth.effect';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ProductModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffect]),
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
