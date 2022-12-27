// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM6fE9pBWF2maBB6rbIsMKgF684ubs-Wk",
  authDomain: "butterfly-fc8e7.firebaseapp.com",
  projectId: "butterfly-fc8e7",
  storageBucket: "butterfly-fc8e7.appspot.com",
  messagingSenderId: "154975974291",
  appId: "1:154975974291:web:7177f19a2fd1c02b622e66",
  measurementId: "G-KMJLGRQJLN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth}
