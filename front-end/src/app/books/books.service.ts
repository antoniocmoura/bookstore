import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Book } from "./model/Book";
import { Observable } from "rxjs";

@Injectable()

export class BooksService {

    private booksUrl = 'http://localhost:44382/api/books';

    private books: Book[] = [];
    private filterBy: string = '';


    filteredBooks: Book[] = [];

    constructor(private http: HttpClient) { }

    private getBooksAPI(): Observable<Book[]> {
        return this.http.get<Book[]>(this.booksUrl);
    }

    getBooks() {
        this.getBooksAPI().subscribe({
            next: books => {
                this.books = books;
                if (this.filterBy.length > 0) {
                    this.searchBook(this.filterBy)
                } else {
                    this.filteredBooks = books;
                }
            },
            error: err => console.log('Error', err)
        })
    }

    getBookById(id: number): Observable<Book> {
        return this.http.get<Book>(`${this.booksUrl}/${id}`);
    }

    searchBook(filter: string) {
        this.filterBy = filter;
        this.filteredBooks = this.books.filter((book: Book) =>
            book.title.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1 ||
            book.description.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1 ||
            book.subtitle.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1 ||
            book.category.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) > -1
        );
    }

    filterPrice(minPrice: number, maxPrice: number) {
        this.filteredBooks = this.books.filter((book: Book) => book.price >= minPrice && book.price <= maxPrice);
    }

}