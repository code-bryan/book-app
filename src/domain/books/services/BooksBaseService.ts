import FirebaseService from "domain/firebase/FirebaseService";
import firebase from 'firebase';

export default class BookBaseService extends FirebaseService {
    protected firestore: firebase.firestore.Firestore;
        
    constructor () {
        super();
        this.firestore = this.firebase.firestore();
    }
}