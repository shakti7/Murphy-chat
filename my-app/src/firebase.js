// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQ1aptOAdua7odii-TY4mUAKO8ix-wqDA",
    authDomain: "murphy-chat-e48fa.firebaseapp.com",
    projectId: "murphy-chat-e48fa",
    storageBucket: "murphy-chat-e48fa.appspot.com",
    messagingSenderId: "458055281312",
    appId: "1:458055281312:web:00d29d2eb67021203277c5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
