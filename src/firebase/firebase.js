import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCNBhDE44KHvtlpMA5-g6P2WKvOXIweKyk",
  authDomain: "ecommerce-clone-27cb3.firebaseapp.com",
  projectId: "ecommerce-clone-27cb3",
  storageBucket: "ecommerce-clone-27cb3.appspot.com",
  messagingSenderId: "939159286709",
  appId: "1:939159286709:web:e8337002cb5d7e79119ffc",
  measurementId: "G-VS5YP9WCH9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(); 
