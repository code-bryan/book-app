import Library from "../entities/Library";
import BookBaseService from "./BooksBaseService";

export class LibraryService extends BookBaseService {
    constructor () {
        super('libraries');
    }

    async get(id: string): Promise<Library> {
        const snapshot = await this.firestore.collection(this.Reference).doc(id).get(); 
        const { books, collections } = snapshot.data() as Library;
        return new Library(snapshot.id, books, collections)
    }
}