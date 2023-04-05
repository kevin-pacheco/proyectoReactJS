import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQlZcm93TniGGcUmN9XvTzwYrfjFB4o1A",
  authDomain: "bytestore-1210.firebaseapp.com",
  projectId: "bytestore-1210",
  storageBucket: "bytestore-1210.appspot.com",
  messagingSenderId: "930685305193",
  appId: "1:930685305193:web:cb5a770307f1c6090d3df8",
};

const app = initializeApp(firebaseConfig);

//db por data base - base de datos
export const db = getFirestore(app);
