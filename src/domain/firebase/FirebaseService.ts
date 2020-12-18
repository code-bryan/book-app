import firebase from "firebase";
import { FirebaseIntiliazier } from "./Initializer";

export default class FirebaseService {
    protected firebase: firebase.app.App = FirebaseIntiliazier.instance();
}