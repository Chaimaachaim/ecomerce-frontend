import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBugkXuI-koX9BgDopMLTc7OyxCtBrSDa8",
  authDomain: "ecommercz-c93dd.firebaseapp.com",
  projectId: "ecommercz-c93dd",
  storageBucket: "ecommercz-c93dd.appspot.com",
  messagingSenderId: "1014607233942",
  appId: "1:1014607233942:web:a95b8d861837b73155d3b7",
  measurementId: "G-5ZVWGY86P4"
};
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db =getFirestore(app)
  export {auth , db};