import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';
import { FiltersComponent } from './filters/filters.component';
import { BooksService } from './books.service';
import { RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartService } from '../cart/cart.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		BooksComponent,
		BookListComponent,
		BookListItemComponent,
		FiltersComponent,
		BookDetailsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'books', component: BooksComponent
			},
			{
				path: 'books/:id', component: BookDetailsComponent
			},
		])
	],
	exports: [
		BooksComponent
	],
	providers: [
		BooksService,
		CartService
	]
})
export class BooksModule { }
