import Book from "../entities/Book";
import BookBaseService from "./BooksBaseService";

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
        const { name, authors, categories, image, description } = snapshot.data() as Book;
        return new Book(snapshot.id, name, description, image, authors, categories);
    }
}