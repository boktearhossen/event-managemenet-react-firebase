// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3504jELEn4JfudBS3X9fkxH3W5WdEflo",
  authDomain: "event-management-a6988.firebaseapp.com",
  projectId: "event-management-a6988",
  storageBucket: "event-management-a6988.appspot.com",
  messagingSenderId: "686210724612",
  appId: "1:686210724612:web:47313b9917f5c42535d651"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth