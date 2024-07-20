// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdGfB9eST-DW0IBlNgqqXIKsCsEekF6Do",
  authDomain: "authentication-react-1edfc.firebaseapp.com",
  projectId: "authentication-react-1edfc",
  storageBucket: "authentication-react-1edfc.appspot.com",
  messagingSenderId: "646692016386",
  appId: "1:646692016386:web:a4dc205ed49d4364d8721b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);