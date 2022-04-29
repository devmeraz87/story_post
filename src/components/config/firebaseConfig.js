// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD09KIWmOlCrtWW4bI_xKaJBv3-K6YgsPs",
  authDomain: "articles-50541.firebaseapp.com",
  projectId: "articles-50541",
  storageBucket: "articles-50541.appspot.com",
  messagingSenderId: "251911638145",
  appId: "1:251911638145:web:49f9e4abc5700f12745180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db }
