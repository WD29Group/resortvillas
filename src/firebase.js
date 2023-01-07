// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUoU2ktY4aOsyOQghdVL9MmP_E6job0ag",
  authDomain: "testchat-75af5.firebaseapp.com",
  databaseURL: "https://testchat-75af5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "testchat-75af5",
  storageBucket: "testchat-75af5.appspot.com",
  messagingSenderId: "736041791961",
  appId: "1:736041791961:web:f26342351713bafc25e9c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)