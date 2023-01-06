// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq0bA8dn8JXPm7S8VUw-Irh2u3w1HDv9w",
  authDomain: "chat-app-ae0df.firebaseapp.com",
  projectId: "chat-app-ae0df",
  databaseURL: "https://chat-app-ae0df-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "chat-app-ae0df.appspot.com",
  messagingSenderId: "365867048984",
  appId: "1:365867048984:web:6ec98bd9f8c7d01e56636d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)