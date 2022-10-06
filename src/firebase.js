// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWTCWylS0_679Jh-PTDE1j1GKS22iyVMA",
  authDomain: "letschat-85f76.firebaseapp.com",
  projectId: "letschat-85f76",
  storageBucket: "letschat-85f76.appspot.com",
  messagingSenderId: "824503387959",
  appId: "1:824503387959:web:94512396ca139b241cbcb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app)