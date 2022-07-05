import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../model/Book';

@Component({
	selector: 'app-book-list-item',
	templateUrl: './book-list-item.component.html',
	styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

	@Input()
	book!: Book;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
	}

	addBookToCart(quantity: number) {
		this.cartService.addBookToCart(this.book, quantity);
	}

}
