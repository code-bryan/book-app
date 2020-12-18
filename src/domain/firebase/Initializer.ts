import firebase from "firebase";
import Configuration from "./Configuration";

export class FirebaseIntiliazier {
    private static init: firebase.app.App | null;

    public static instance(): firebase.app.App {
        if (!this.init) {
            this.init = firebase.initializeApp(Configuration);
        }

        return this.init;
    }
}