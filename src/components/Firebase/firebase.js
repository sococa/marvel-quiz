import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyB5yoO8bubjH9MD3tRwaSPrUa9qI_iHbR8",
    authDomain: "marvel-quiz-dd7b1.firebaseapp.com",
    projectId: "marvel-quiz-dd7b1",
    storageBucket: "marvel-quiz-dd7b1.appspot.com",
    messagingSenderId: "140121158885",
    appId: "1:140121158885:web:fd4492ad230a78087b500c"
};

class Firebase{

    constructor() {
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()

    }

    //inscription
    signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

    //connexion
    loginUser = (email, password) => 
    this.auth.signInWithEmailAndPassword(email, password)

    //Déconnexion
    signoutUser = ()=> this.auth.signOut();

    //Récupérer le mdp
    passwordReset = email => this.auth.sendPasswordResetEmail(email)

    user = uid => this.db.doc(`users/${uid}`)

}

export default Firebase;