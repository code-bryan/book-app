import firebase from 'firebase';
import Book from './Book';

export default class Collection {
    id: string;
    name: string;
    description: string;
    image: string;
    quotes: string[];
    books: string[];
    
    bookList: Book[] = [];

    constructor(id: string, name: string, description: string, image: string, quotes: string[], books: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.quotes = quotes;
        this.books = books;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Collection {
        const { name, description, image, quotes, books } = doc.data() as Collection;
        return new Collection(doc.id, name, description, image, quotes, books);
    }

    setBookList(books: Book[]): void {
        this.bookList = books;
    }
}