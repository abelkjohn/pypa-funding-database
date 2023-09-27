// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFIWRbtJpIGgafpX9JzXueRTbFI8HNGU",
  authDomain: "sales-dashboard-37b77.firebaseapp.com",
  projectId: "sales-dashboard-37b77",
  storageBucket: "sales-dashboard-37b77.appspot.com",
  messagingSenderId: "370292683876",
  appId: "1:370292683876:web:1895211b44d7edfe6d5b71",
  databaseURL: "https://sales-dashboard-37b77-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);