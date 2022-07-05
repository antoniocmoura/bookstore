import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { BooksService } from '../books.service';
import { Book } from '../model/Book';

@Component({
	selector: 'app-book-details',
	templateUrl: './book-details.component.html',
	styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

	public book!: Book;

	@Input()
    public quantity: number = 1;	

	constructor(
		private activatedRoute: ActivatedRoute,
		private booksService: BooksService,
		private cartService: CartService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.booksService.getBookById(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe({
			next: book => this.book = book,
			error: err => console.log(err)
		});
	}

	addBookToCart(): void {
		this.cartService.addBookToCart(this.book, this.quantity);
		this.router.navigate(['/cart']);
	}

}
