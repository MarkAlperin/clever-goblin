// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDute0OovhzBeveAw4Umfn_UVKd5O8E1mI",
  authDomain: "clever-goblin.firebaseapp.com",
  projectId: "clever-goblin",
  storageBucket: "clever-goblin.appspot.com",
  messagingSenderId: "705607109690",
  appId: "1:705607109690:web:b50d7bfada6869aee87903",
  measurementId: "G-LY519JWY78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

module.export = {
  app,
  analytics,
};