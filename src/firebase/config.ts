// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6q_ZCm9ZeWFKwPLW2d-1LQVZ6VinfxUs",
  authDomain: "noche-project-fdec2.firebaseapp.com",
  projectId: "noche-project-fdec2",
  storageBucket: "noche-project-fdec2.firebasestorage.app",
  messagingSenderId: "412449164553",
  appId: "1:412449164553:web:31d3c8b6af3e25360bd7d8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);