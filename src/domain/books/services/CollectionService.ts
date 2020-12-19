import Collection from "../entities/Collection";
import BookBaseService from "./BooksBaseService";
import BookService from "./BookService";

export default class CollectionService extends BookBaseService {
    private readonly bookService: BookService;

    constructor() {
        super("collections");
        this.bookService = new BookService();
    }

    async all(): Promise<Collection[]> {
       const snapchot = await this.firestore.collection(this.Reference).limit(12).get();
       return snapchot.docs.map<Collection>((doc) => Collection.fromFirestore(doc))
    }

    async find(id: string): Promise<Collection> {
        const snapshot = await this.firestore.collection(this.Reference).doc(id).get(); 
        const { name, image, description, quotes, books } = snapshot.data() as Collection;
        const collection = new Collection(snapshot.id, name, description, image, quotes, books)
        collection.setBookList(await this.bookService.findMultiples(books));
        return collection;
    }
}