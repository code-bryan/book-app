import Book from "./Book";
import Category from "./Category";
import Collection from "./Collection";

export default class Library {
    id: string;
    books: string[];
    collections: string[];

    booksList: Book[] = [];
    collectionsList: Collection[] = [];
    categories: Category[] = [];
    
    constructor(id: string, books: string[], collections: string[]) {
        this.id = id;
        this.books = books;
        this.collections = collections;
    }

    setBookList(books: Book[]): void {
        this.booksList = books;
    }

    setCategories(books: Book[]): void {
        let categories: Category[] = [];
        books.map((book) => [...categories, book.categories]);
        this.categories = categories.sort().filter((item, pos, ary) => !pos || item != ary[pos - 1]);
    }

    setCollections(collections: Collection[]): void {
        this.collectionsList = collections;
    }
}