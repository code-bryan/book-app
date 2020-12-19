import FirebaseService from "domain/firebase/FirebaseService";
import firebase from 'firebase';

export default class BookBaseService extends FirebaseService {
    protected readonly firestore: firebase.firestore.Firestore;
    protected readonly Reference: string;
        
    constructor (name: string) {
        super();
        this.Reference = name;
        this.firestore = this.firebase.firestore();
    }
}