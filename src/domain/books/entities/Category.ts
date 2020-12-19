import firebase from 'firebase';
export default class Category {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static fromFirestore(doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>): Category {
        const { name } = doc.data() as Category;
        return new Category(doc.id, name);
    }
}