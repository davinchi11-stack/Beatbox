// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDAXOKqLq3IU_uxv9r5XnPlCUjYUGMwFSM",
  authDomain: "beat-a4f7f.firebaseapp.com",
  projectId: "beat-a4f7f",
  storageBucket: "beat-a4f7f.appspot.com",
  messagingSenderId: "668272919794",
  appId: "1:668272919794:web:9e05bce2c3653d3fec3c6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
