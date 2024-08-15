// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase} from "firebase/firestore"

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyABumdf2e8vP3EU6Cyy0Y4RRiAqsE9as",
  authDomain: "flashcardsaas-68271.firebaseapp.com",
  projectId: "flashcardsaas-68271",
  storageBucket: "flashcardsaas-68271.appspot.com",
  messagingSenderId: "862390801973",
  appId: "1:862390801973:web:f7197d82f337c3bb5a037c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export{db}