// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD24XJ-EyCAV0Yt3ehhXyOqs2y8Es68bPo",
  authDomain: "netflixgpt-25152.firebaseapp.com",
  projectId: "netflixgpt-25152",
  storageBucket: "netflixgpt-25152.appspot.com",
  messagingSenderId: "579479366851",
  appId: "1:579479366851:web:da9ea636014ae3e9090676",
  measurementId: "G-739KYL2P52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
