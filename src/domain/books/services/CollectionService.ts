import Collection from "../entities/Collection";
import BookBaseService from "./BooksBaseService";

export default class CollectionService extends BookBaseService {
    private readonly Reference = 'collections';

    async all(): Promise<Collection[]> {
       const snapchot = await this.firestore.collection(this.Reference).limit(12).get();
       return snapchot.docs.map<Collection>((doc) => Collection.fromFirestore(doc))
    }

}