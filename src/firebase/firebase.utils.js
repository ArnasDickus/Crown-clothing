import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzIe8fnUPe0uZjZZj2IB3jR4Uw-Td-beY",
    authDomain: "crown-db-b6c10.firebaseapp.com",
    databaseURL: "https://crown-db-b6c10.firebaseio.com",
    projectId: "crown-db-b6c10",
    storageBucket: "crown-db-b6c10.appspot.com",
    messagingSenderId: "28159511303",
    appId: "1:28159511303:web:eab806e19fc164ab2a13a2"
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
