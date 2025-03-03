// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpihJSfkjkHoBE8kfQa_isIR58EQn_VMc",
  authDomain: "react-memeverse-app.firebaseapp.com",
  projectId: "react-memeverse-app",
  storageBucket: "react-memeverse-app.firebasestorage.app",
  messagingSenderId: "966999245922",
  appId: "1:966999245922:web:34b3920e7cb21e6e2c3d3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
