import firebase from 'firebase';
import Author from './Author';
import Category from "./Category";

export default class Book {
    id: string;
    name: string;
    image: string;
    description: string;
    authors: Author[];
    categories: Category[];

    constructor(id: string, name: string, description: string, image: string, authors: Author[], categories: Category[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.authors = authors;
        this.categories = categories;
        this.description = description;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Book   {
        const { name, image, authors, categories, description } = doc.data() as Book;
        return new Book(doc.id, name, description, image, authors, categories);
    }

    firstAuthor(): string {
        return this.authors[0].name;
    }
}