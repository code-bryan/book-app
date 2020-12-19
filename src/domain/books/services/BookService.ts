import Book from "../entities/Book";
import BookBaseService from "./BooksBaseService";
import firebase from 'firebase';
export default class BookService extends BookBaseService {
    constructor() {
        super("books");
    }

    async all(): Promise<Book[]> {
       const snapchot = await this.firestore.collection(this.Reference).limit(12).get();
       return snapchot.docs.map<Book>((doc) => Book.fromFirestore(doc))
    }

    async find(id: string): Promise<Book> {
        const snapshot = await this.firestore.collection(this.Reference).doc(id).get(); 
        return Book.fromFirestore(snapshot);
    }

    async findMultiples(ids: string[]): Promise<Book[]> {
        const snapchot = await this.firestore.collection(this.Reference).where(firebase.firestore.FieldPath.documentId(), 'in', ids).get()
        return snapchot.docs.map<Book>((doc) => Book.fromFirestore(doc))
    }
}   