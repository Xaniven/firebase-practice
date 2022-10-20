// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvNqJNgTYQpeACzwPHLcDKW33ae1K-dJE",
  authDomain: "auth-test-681b0.firebaseapp.com",
  projectId: "auth-test-681b0",
  storageBucket: "auth-test-681b0.appspot.com",
  messagingSenderId: "448055177583",
  appId: "1:448055177583:web:39b50bca0d2b9d591bb89a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);
