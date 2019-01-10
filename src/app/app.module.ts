import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './module/core/core.module';
import { CartModule } from './module/cart/cart.module';
import { WishModule } from './module/wish/wish.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CartModule,
    WishModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
