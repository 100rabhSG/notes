// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjFDOteUa3PJxRAPdd2EOPhQV9RX0ELsI",
  authDomain: "notes-ee26a.firebaseapp.com",
  projectId: "notes-ee26a",
  storageBucket: "notes-ee26a.appspot.com",
  messagingSenderId: "271494255867",
  appId: "1:271494255867:web:684e3eb94c95d998a1cc5e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
