 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8o9PLBFw2vfz6SjFc5ZUP00c0QR9h3F8",
  authDomain: "clothestoreapp.firebaseapp.com",
  projectId: "clothestoreapp",
  storageBucket: "clothestoreapp.firebasestorage.app",
  messagingSenderId: "709090144071",
  appId: "1:709090144071:web:69680652391d00d707e662"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

return {
    provide: {
        firebaseApp: app,
        db,
        auth
    }
}



})