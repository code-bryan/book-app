export default class ProfileRequest {
    name: string;
    lastname: string;
    email: string;

    constructor(name: string, lastname: string, email: string) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
    }
}