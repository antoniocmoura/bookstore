import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
	selector: 'app-book-list',
	templateUrl: './book-list.component.html',
	styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	booksService: BooksService;

	constructor(booksService: BooksService) {
		this.booksService = booksService;
	}

	ngOnInit(): void {
		this.booksService.getBooks();
	}
	
}
