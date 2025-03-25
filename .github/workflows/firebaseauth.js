// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHOJmtUa8S4m0O50n2K6czLFZLvpcPkFc",
    authDomain: "medly-5582c.firebaseapp.com",
    projectId: "medly-5582c",
    storageBucket: "medly-5582c.firebasestorage.app",
    messagingSenderId: "317679786195",
    appId: "1:317679786195:web:e0705312e9fea4430fdc26",
    measurementId: "G-14JEPWZLFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth();

// Sign up function with redirect
export async function signUp(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Redirect to a different page after successful sign-up
        window.location.href = "/dashboard.html"; // Replace with your desired URL
    } catch (error) {
        throw new Error(error.message);
    }
}

// Sign in function with redirect
export async function signIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to a different page after successful sign-in
        window.location.href = "/dashboard.html"; // Replace with your desired URL
    } catch (error) {
        throw new Error(error.message);
    }
}

// Google sign-in function with redirect
export async function googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
        // Redirect to a different page after successful Google sign-in
        window.location.href = "/dashboard.html"; // Replace with your desired URL
    } catch (error) {
        throw new Error(error.message);
    }
}
