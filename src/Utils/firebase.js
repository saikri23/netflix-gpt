// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWl5vH_kUNa4e6x6KFueqTgyBmaei2E0",
  authDomain: "netflixgpt-e292e.firebaseapp.com",
  projectId: "netflixgpt-e292e",
  storageBucket: "netflixgpt-e292e.appspot.com",
  messagingSenderId: "1043495115493",
  appId: "1:1043495115493:web:103105628e9ccf0aeed20c",
  measurementId: "G-5W0MNKC36S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);