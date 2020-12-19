import firebase from 'firebase';
import Author from './Author';
import Category from "./Category";

export default class Book {
    id: string;
    name: string;
    image: string;
    authors: Author[];
    categories: Category[];

    constructor(id: string, name: string, image: string, authors: Author[], categories: Category[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.authors = authors;
        this.categories = categories;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Book   {
        const { id, name, image, authors, categories } = doc.data() as Book;
        return new Book(id, name, image, authors, categories);
    }

    firstAuthor(): string {
        return this.authors[0].name;
    }
}