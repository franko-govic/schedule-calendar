// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqKDO9HkwZPJwIrXx6Dr46O_mgFun8NE0",
  authDomain: "schedule-calendar-15dae.firebaseapp.com",
  projectId: "schedule-calendar-15dae",
  storageBucket: "schedule-calendar-15dae.firebasestorage.app",
  messagingSenderId: "1065272874332",
  appId: "1:1065272874332:web:f1edcf717cb6f550569d99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
