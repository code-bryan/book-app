import Library from "../entities/Library";
import BookBaseService from "./BooksBaseService";
import BookService from "./BookService";
import CollectionService from "./CollectionService";

export class LibraryService extends BookBaseService {
    private readonly bookService: BookService;
    private readonly collectionService: CollectionService;

    constructor () {
        super('libraries');
        this.bookService = new BookService();
        this.collectionService = new CollectionService();
    }

    async get(id: string): Promise<Library> {
        const snapshot = await this.firestore.collection(this.Reference).doc(id).get(); 
        const { books, collections } = snapshot.data() as Library;
        const library = new Library(snapshot.id, books, collections);
        library.setBookList(await this.bookService.findMultiples(books));
        library.setCollections(await this.collectionService.findMultiples(collections));
        return library;
    }
}