import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
	declarations: [
		CartComponent,
		CartItemComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{
				path: 'cart', component: CartComponent
			}
		])
	],
	providers: [
		CartService
	]
})

export class CartModule { }
