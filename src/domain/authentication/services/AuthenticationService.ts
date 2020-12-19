import FirebaseService from "domain/firebase/FirebaseService";
import User from "../entities/User";
import LoginError from "../error/LoginError";
import LoginRequest from "../senders/LoginRequest";
import RegisterRequest from "../senders/RegisterRequest";
import firebase from 'firebase';
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;
export default class AuthenticationService extends FirebaseService {
    private auth: firebase.auth.Auth;

    constructor () {
        super();

        this.auth = firebase.auth();
    }

    async verifyLogin(): Promise<User|undefined> {
        const { value } = await Storage.get({ key: "user" });
        return value ? User.fromStorage(value) : undefined;
    }

    async login({ email, password }: LoginRequest): Promise<User> {
        const { user } = await this.auth.signInWithEmailAndPassword(email, password);

        if (!user) {
            throw new LoginError();
        }

        const authenticatedUser = User.fromFirebase(user);
        await this.setUserToStorage(authenticatedUser);
        return authenticatedUser
    }

    async logout(): Promise<void> {
       await this.firebase.auth().signOut();
       await Storage.remove({ key: 'user' });
    }

    async register({ email, password, name, lastname}: RegisterRequest): Promise<User> {
        const { user } = await this.auth.createUserWithEmailAndPassword(email, password);
        
        if (!user) {
            throw new LoginError();
        }

        await user.updateProfile({
            displayName: `${name} ${lastname}`
        });

        const authenticatedUser = User.fromFirebase(user);
        await this.setUserToStorage(authenticatedUser);
        return authenticatedUser;
    }

    async forgotPassword(email: string): Promise<void> {
        await this.auth.sendPasswordResetEmail(email);
    }

    private async setUserToStorage(user: User): Promise<void> {
        await Storage.set({ key: 'user', value: JSON.stringify(user) })
    }
}