import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { BookListComponent } from './book-list/book-list.component';
import { CartComponent } from './book-list/cart/cart.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReturnBookComponent } from './return-book/return-book.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    BookListComponent,
    CartComponent,
    UserDetailsComponent,
    ReturnBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
