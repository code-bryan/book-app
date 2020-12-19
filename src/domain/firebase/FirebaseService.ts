import firebase from "firebase";
import { FirebaseIntiliazier } from "./Initializer";

export default class FirebaseService {
    protected readonly firebase: firebase.app.App = FirebaseIntiliazier.instance();
}