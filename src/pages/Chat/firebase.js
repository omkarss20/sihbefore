import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIvZAXUXLz1Sb6HMMcEFwTzonujD-_dCU",
  authDomain: "yourchat-9f6f4.firebaseapp.com",
  projectId: "yourchat-9f6f4",
  storageBucket: "yourchat-9f6f4.appspot.com",
  messagingSenderId: "386288912141",
  appId: "1:386288912141:web:76e247de01f86da7f89244",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
