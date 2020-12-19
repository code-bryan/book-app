import firebase from 'firebase';

export default class Collection {
    id: string;
    name: string;
    description: string;
    image: string;
    quotes: string[];

    constructor(id: string, name: string, description: string, image: string, quotes: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.quotes = quotes;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Collection {
        const { id, name, description, image, quotes } = doc.data() as Collection;
        return new Collection(id, name, description, image, quotes);
    }
}