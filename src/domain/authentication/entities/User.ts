import firebase from "firebase";

export default class User {
    name: string;
    lastname: string;
    email: string;

    constructor(name: string, lastname: string, email: string) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    static fromFirebase(user: firebase.User): User {
        const [name, lastname] = user.displayName!.split(' ');
        return new User(name, lastname, user.email!);
    }
}