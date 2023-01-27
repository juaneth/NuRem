// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjRdKtcOr1SHgV9Adl39MPEKraDeRxxUw",
    authDomain: "nurem-api.firebaseapp.com",
    projectId: "nurem-api",
    storageBucket: "nurem-api.appspot.com",
    messagingSenderId: "795402619369",
    appId: "1:795402619369:web:4accabda9eee2b9b3ba378",
    measurementId: "G-W5J3G5RVJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()