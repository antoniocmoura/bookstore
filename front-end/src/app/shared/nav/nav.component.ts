import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/books/books.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	private filterBy: string = '';

	cartCount$: number = 0;
	countSub: Subscription;

	constructor(private cartService: CartService, private booksService: BooksService, private router: Router) {
		this.countSub = this.cartService.cartCount$.subscribe(
			count => {
				this.cartCount$ = count;
			}
		)
		this.cartService.setCartCount(0);
	};

	set filter(value: string) {
		this.filterBy = value;
		if (this.filterBy.length === 0) {
			this.booksService.searchBook(this.filter);
		}
	}

	get filter(): string {
		return this.filterBy;
	}

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.countSub.unsubscribe();
	}

	searchBook() {
		this.booksService.searchBook(this.filter);
		if (this.router.url !== '/books') {
			this.router.navigate(['/books']);
		}	
	}

}
