import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCq0bA8dn8JXPm7S8VUw-Irh2u3w1HDv9w",
  authDomain: "chat-app-ae0df.firebaseapp.com",
  projectId: "chat-app-ae0df",
  databaseURL: "https://chat-app-ae0df-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "chat-app-ae0df.appspot.com",
  messagingSenderId: "365867048984",
  appId: "1:365867048984:web:6ec98bd9f8c7d01e56636d"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
