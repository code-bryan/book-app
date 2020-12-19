import Collection from "../entities/Collection";
import BookBaseService from "./BooksBaseService";

export default class CollectionService extends BookBaseService {
    private readonly CollectionReference = 'collections';

    async all(): Promise<Collection[]> {
       const snapchot = await this.firestore.collection(this.CollectionReference).limit(12).get();
       return snapchot.docs.map<Collection>((doc) => Collection.fromFirestore(doc))
    }

}