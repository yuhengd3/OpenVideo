// Import the functions you need from the SDKs you need
import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import 'firebase/firestore';

import { getDatabase } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
const db = getFirestore(app);
//const db = getApp.ref();

//export default db;
export const auth = getAuth()
export {db, firebase};


export async function getRooms(db:any) {
  const rooms = collection(db,'rooms');
  const roomsSnapshot = await getDocs(rooms);
  const roomsList = roomsSnapshot.docs.map(doc => doc.data());
  return roomsList;
}