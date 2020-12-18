import firebase from "firebase";

export default class User {
    id: string;
    name: string;
    lastname: string;
    email: string;

    constructor(id: string, name: string, lastname: string, email: string) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }

    static fromFirebase(user: firebase.User): User {
        const { email, uid, displayName } = user;
        let name = '';
        let lastname = '';
        if (displayName) {
            const [n, ln] = user.displayName!.split(' ');
            name = n;
            lastname = ln;
        }

        
        return new User(uid, name, lastname, email!);
    }
}