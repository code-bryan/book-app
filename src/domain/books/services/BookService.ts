import Book from "../entities/Book";
import BookBaseService from "./BooksBaseService";

export default class BookService extends BookBaseService {
    private readonly Reference = 'books';

    async all(): Promise<Book[]> {
       const snapchot = await this.firestore.collection(this.Reference).limit(12).get();
       return snapchot.docs.map<Book>((doc) => Book.fromFirestore(doc))
    }
}