export default class RegisterRequest {
    name: string;
    lastname: string;
    email: string;
    password: string;

    constructor(name: string, lastname: string, email: string, password: string) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
}