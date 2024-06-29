// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = new Firestore();
const auth = getAuth(app);

export {auth}
export default db;