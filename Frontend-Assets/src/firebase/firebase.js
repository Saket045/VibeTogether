// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDtqUy-TM6c6SiuxKxcbTtLmAX7d_IivY0",
  authDomain: "communitybase-6bdad.firebaseapp.com",
  projectId: "communitybase-6bdad",
  storageBucket: "communitybase-6bdad.firebasestorage.app",
  messagingSenderId: "184035738379",
  appId: "1:184035738379:web:ccf3172a30b9c03577580e",
  measurementId: "G-96PF200XX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export {app,auth,analytics}