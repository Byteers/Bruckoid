import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwD9helxX2vpCGd5x9vO6_Pp5Nji0-TYE",
  authDomain: "react-picnpic.firebaseapp.com",
  projectId: "react-picnpic",
  storageBucket: "react-picnpic.appspot.com",
  messagingSenderId: "218910261279",
  appId: "1:218910261279:web:916b57bf2823d7a434152a",
  measurementId: "G-M0WM6RZT1D"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app)