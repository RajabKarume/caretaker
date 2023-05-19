// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import{ getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA4CWUjgQMPxXIFu-OtoJPoL4AVSMoK-LQ",
  authDomain: "caretaker-c0a94.firebaseapp.com",
  projectId: "caretaker-c0a94",
  storageBucket: "caretaker-c0a94.appspot.com",
  messagingSenderId: "557844394434",
  appId: "1:557844394434:web:f4f65a55aa3a882339665b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()