import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../model/CartItem';

@Component({
	selector: 'tr[app-cart-item]',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

	@Input() 
	public cartItem!: CartItem;

	constructor(private cartService: CartService) { }

	ngOnInit(): void {
	}

	removeItem() {
		this.cartService.removeBookFromCart(this.cartItem.book.id)
	}

}
