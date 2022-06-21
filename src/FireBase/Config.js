// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_xn_Va7_Rmrt1XJdQ24hRjbX-QuONB7E",
  authDomain: "fir-gen-21-day.firebaseapp.com",
  projectId: "fir-gen-21-day",
  storageBucket: "fir-gen-21-day.appspot.com",
  messagingSenderId: "254054058065",
  appId: "1:254054058065:web:03e36795caebf0ef12d070",
  measurementId: "G-ZLKM2VRMK4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);