import { Component, Input, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
	selector: 'app-filters',
	templateUrl: './filters.component.html',
	styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

	constructor(private booksService: BooksService) { }
	
	@Input()
	public minPrice: number = 1;
	public maxPrice: number = 100;

	ngOnInit(): void {
	}

	filterPrice() {
		this.booksService.filterPrice(this.minPrice, this.maxPrice);
	}

}
