/* eslint-disable @typescript-eslint/no-explicit-any */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb4PRs9rPqYbJCvqaZFrbU4nSvj3VVeIg",
  authDomain: "edtech-a8476.firebaseapp.com",
  projectId: "edtech-a8476",
  storageBucket: "edtech-a8476.appspot.com",
  messagingSenderId: "18587340400",
  appId: "1:18587340400:web:5e04529d7e79c481a2aeb5",
  measurementId: "G-SRMHYHF67R"
};

// Initialize Firebase
const app: any = initializeApp(firebaseConfig);
 const analytics: any = getAnalytics(app);

// Initialize a firebase authentication and get a reference  to the service

export const auth : any = getAuth(app);
export {analytics};