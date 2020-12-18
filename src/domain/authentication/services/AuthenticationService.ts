import { throws } from "assert";
import FirebaseService from "domain/firebase/FirebaseService";
import User from "../entities/User";
import LoginError from "../error/LoginError";
import LoginRequest from "../senders/LoginRequest";
import RegisterRequest from "../senders/RegisterRequest";
import firebase from 'firebase';

export default class AuthenticationService extends FirebaseService {
    private auth: firebase.auth.Auth;

    constructor () {
        super();

        this.auth = firebase.auth();
    }

    async login({ email, password }: LoginRequest): Promise<User> {
        const { user } = await this.auth.signInWithEmailAndPassword(email, password);

        if (!user) {
            throw new LoginError();
        }

        return User.fromFirebase(user);
    }

    async logout(): Promise<void> {
       await this.firebase.auth().signOut();
    }

    async register({ email, password, name, lastname}: RegisterRequest): Promise<User> {
        const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
        
        if (!user) {
            throw new LoginError();
        }

        await user.updateProfile({
            displayName: `${name} ${lastname}`
        });
        
        return User.fromFirebase(user);
    }
}