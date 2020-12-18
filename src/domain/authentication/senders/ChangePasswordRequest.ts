export default class ChangePasswordRequest {
    old_password: string;
    password: string;
    confirmation_password: string;

    constructor (old_password: string, password: string, confirmation_password: string) {
        this.old_password = old_password;
        this.password = password;
        this.confirmation_password = confirmation_password;
    }
}