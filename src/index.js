// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaPsn82u0CblmIXb9SktjOvfq2vRqeBPY",
  authDomain: "macos-luna.firebaseapp.com",
  databaseURL: "https://macos-luna-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "macos-luna",
  storageBucket: "macos-luna.appspot.com",
  messagingSenderId: "689056077392",
  appId: "1:689056077392:web:8275d5fe7f18ac35a5a355",
  measurementId: "G-5EMDZ1MDC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);