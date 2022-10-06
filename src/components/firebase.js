// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

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
export const auth = getAuth();

export default async function signup(email, password) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export async function login(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
