import firebase from 'firebase';
import moment from 'moment';
import Author from './Author';
import Category from "./Category";

export default class Book {
    id: string;
    name: string;
    image: string;
    description: string;
    authors: Author[];
    categories: Category[];
    publish_date: Date;
    publisher: string
    chapter: string;

    constructor(id: string, name: string, description: string, image: string, authors: Author[], categories: Category[], publish_date: Date, publisher: string, chapter: string) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.authors = authors;
        this.categories = categories;
        this.description = description;
        this.publish_date = publish_date;
        this.publisher = publisher
        this.chapter = chapter;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData> | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Book   {
        const { name, image, authors, categories, description, publish_date, publisher, chapter } = doc.data() as any;
        return new Book(doc.id, name, description, image, authors, categories, publish_date.toDate(), publisher, chapter);
    }

    firstAuthor(): string {
        return this.authors[0].name;
    }

    formatDate(): string {
       return moment(this.publish_date).format("MMMM DD [de] YYYY");
    }
}