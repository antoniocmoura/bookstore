import { Book } from "src/app/books/model/Book";

export interface CartItem {
    book: Book;
    quantity: number;
}