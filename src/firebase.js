// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrghW3I0VyvYwXuTtIgXcsvs8LMh_lhW0",
  authDomain: "hola-amigo-b3bea.firebaseapp.com",
  projectId: "hola-amigo-b3bea",
  storageBucket: "hola-amigo-b3bea.appspot.com",
  messagingSenderId: "40434274714",
  appId: "1:40434274714:web:9743c2454613035e5eaa23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };