// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore } from "@firebase/firestore"; // Perbarui ini
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq8FVJCq-gV7Gy0ueJt6nTrcoUFTZhbcw",
  authDomain: "portfolio-30b45.firebaseapp.com",
  projectId: "portfolio-30b45",
  storageBucket: "portfolio-30b45.firebasestorage.app",
  messagingSenderId: "1039350171859",
  appId: "1:1039350171859:web:df2a30fb52fb5e38dcec26",
  measurementId: "G-58M64J8R4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, collection, addDoc };