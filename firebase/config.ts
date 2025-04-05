// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGsV1-WXYWHk7Tmbb2ux1S6fgAcic6hN0",
  authDomain: "adv-102-exercise9.firebaseapp.com",
  projectId: "adv-102-exercise9",
  storageBucket: "adv-102-exercise9.firebasestorage.app",
  messagingSenderId: "855702547933",
  appId: "1:855702547933:web:e34569231f9159ebd4da34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}