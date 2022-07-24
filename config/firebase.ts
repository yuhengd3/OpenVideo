// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJrxn9pr1Lnq0ERxsHAKPhyNrf_qNXhQk",
  authDomain: "video-app-26195.firebaseapp.com",
  databaseURL: "https://video-app-26195-default-rtdb.firebaseio.com",
  projectId: "video-app-26195",
  storageBucket: "video-app-26195.appspot.com",
  messagingSenderId: "407408489851",
  appId: "1:407408489851:web:28d80d9f5dc069e89039de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
