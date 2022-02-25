// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASBKYiozlPZ_r5hAx9-8WP7qP80qDg2co",
    authDomain: "linkedin-clone-add13.firebaseapp.com",
    projectId: "linkedin-clone-add13",
    storageBucket: "linkedin-clone-add13.appspot.com",
    messagingSenderId: "8836316563",
    appId: "1:8836316563:web:5f28282986cafc6d647c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}
