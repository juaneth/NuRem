// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();
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

// Login if signed out
auth.onAuthStateChanged(user => {
    if (!user) {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;

                console.log(user, token)
                    // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
})