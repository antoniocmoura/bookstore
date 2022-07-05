import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Book } from "../books/model/Book";
import { CartItem } from "./model/CartItem";

@Injectable()

export class CartService {

    private cartCount = new Subject<number>();
    cartCount$ = this.cartCount.asObservable();

    cartList: CartItem[];

    constructor() {
        this.cartList = [];
    };

    setCartCount(count: number) {
        this.cartCount.next(count);
    }

    getCartCount(): void {
        let count = this.cartList.reduce((accumulator, obj) => {
            return accumulator + obj.quantity;
        }, 0);
        this.setCartCount(count);
    }

    getCartAmmount(): number {
        this.getCartCount();
        let ammount = this.cartList.reduce((accumulator, obj) => {
            return accumulator + (obj.quantity * obj.book.price);
        }, 0);
        return ammount;
    }

    addBookToCart(book: Book, quantity: number): void {
        let itemUpdated = false;
        this.cartList.forEach((item) => {
            if (item.book.id === book.id) {
                item.quantity += quantity;
                itemUpdated = true;
            }
        })
        if (!itemUpdated) {
            let cartItem: CartItem = {
                book: book,
                quantity: quantity
            }
            this.cartList.push(cartItem);
        }
        this.getCartCount();
    }

    removeBookFromCart(id: number): void {
        this.cartList = this.cartList.filter((item: CartItem) => item.book.id !== id); 
        this.getCartCount();
    }

    checkout(): void {
        this.cartList = [];
        this.getCartCount();        
    }

}