import Category from "../entities/Category";
import BookBaseService from "./BooksBaseService";

export default class CategoryService extends BookBaseService {
    constructor() {
        super("categories");
    }

    async all(): Promise<Category[]> {
       const snapchot = await this.firestore.collection(this.Reference).limit(12).get();
       return snapchot.docs.map<Category>((doc) => Category.fromFirestore(doc))
    }

    
}