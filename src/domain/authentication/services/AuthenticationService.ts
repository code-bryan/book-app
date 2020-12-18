import FirebaseService from "domain/firebase/FirebaseService";
import User from "../entities/User";
import LoginError from "../error/LoginError";
import LoginRequest from "../senders/LoginRequest";

export default class AuthenticationService extends FirebaseService {
    constructor () {
        super();
    }

    async login({ email, password }: LoginRequest): Promise<User> {
        const user = await this.firebase.auth().signInWithEmailAndPassword(email, password);

        if (!user.user) {
            throw new LoginError();
        }

        return User.fromFirebase(user.user);
    }

    async logout(): Promise<void> {
       await this.firebase.auth().signOut();
    }
}