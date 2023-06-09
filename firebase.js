import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAACTn5sqt3yQQGEpzDlQ1PgMhiUFz2bH0",
    authDomain: "foodiemoodie-37167.firebaseapp.com",
    projectId: "foodiemoodie-37167",
    storageBucket: "foodiemoodie-37167.appspot.com",
    messagingSenderId: "352007013946",
    appId: "1:352007013946:web:ce97f3a5c0395b3aa01703",
    measurementId: "G-10PJ6GXZE3"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}