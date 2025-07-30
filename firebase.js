 // firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBmSmDb5oz5yDIn_rVn-9X4aysI-JDs3m4",
    authDomain: "webmythos.firebaseapp.com",
    projectId: "webmythos",
    storageBucket: "webmythos.firebasestorage.app",
    messagingSenderId: "596504235976",
    appId: "1:596504235976:web:1e755977417af65afb3afd",
    measurementId: "G-8BZB6ERBLE"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
