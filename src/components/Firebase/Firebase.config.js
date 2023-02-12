// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Oq-vRqK4v5iNJMCpaijXySMgW6XddwM",
  authDomain: "psychological-vague-client.firebaseapp.com",
  projectId: "psychological-vague-client",
  storageBucket: "psychological-vague-client.appspot.com",
  messagingSenderId: "956331371473",
  appId: "1:956331371473:web:232b3f6d86f45e1cb4cef0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;