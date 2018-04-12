import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringbookRoutingModule } from './springbook-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    // tslint:disable-next-line:no-trailing-whitespace
    SpringbookRoutingModule 
  ],
  declarations: [BookListComponent, BookCreateComponent]
})
export class SpringbookModule { }
