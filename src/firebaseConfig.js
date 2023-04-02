import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXMHxgqnl8Bg8SEFveP9DWsSJDBzUOizU",
  authDomain: "proyectocoderhouse-7a16c.firebaseapp.com",
  projectId: "proyectocoderhouse-7a16c",
  storageBucket: "proyectocoderhouse-7a16c.appspot.com",
  messagingSenderId: "786236118621",
  appId: "1:786236118621:web:d36edbac6a5ca251695fb4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
