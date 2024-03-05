import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjFDOteUa3PJxRAPdd2EOPhQV9RX0ELsI",
  authDomain: "notes-ee26a.firebaseapp.com",
  projectId: "notes-ee26a",
  storageBucket: "notes-ee26a.appspot.com",
  messagingSenderId: "271494255867",
  appId: "1:271494255867:web:684e3eb94c95d998a1cc5e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// const db = getFirestore(app);
//
// export default db;
