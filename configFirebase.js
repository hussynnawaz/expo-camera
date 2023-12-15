import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOglRPCalUFPVmfg4xomAS6yblXuKqkMo",
  authDomain: "bse5bfall23-8b4dc.firebaseapp.com",
  projectId: "bse5bfall23-8b4dc",
  storageBucket: "bse5bfall23-8b4dc.appspot.com",
  messagingSenderId: "662306736979",
  appId: "1:662306736979:web:219f739a631affcfa9efa6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
