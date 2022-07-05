import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { CartItem } from './model/CartItem';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	constructor(private cartService: CartService, private router: Router) { }

	ngOnInit(): void {
	}

	getCartList(): CartItem[] {
		return this.cartService.cartList
	}

	getCartAmmount() {
		return this.cartService.getCartAmmount();
	}

	checkout() : void {
		this.cartService.checkout();
        this.router.navigate(['/books'])
	}

}
