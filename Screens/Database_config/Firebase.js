// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCme1faOHtXY-fWvsQnZcuRV5R765v9VGI",
  authDomain: "dog-em.firebaseapp.com",
  projectId: "dog-em",
  storageBucket: "dog-em.appspot.com",
  messagingSenderId: "419717561693",
  appId: "1:419717561693:web:f2b7ab70db9041e7b9fcb4",
  measurementId: "G-G54ZHKNFN5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);