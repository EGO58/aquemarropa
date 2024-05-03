import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmyttSMeya7vhjoqOo6RGP4c-vIqHgDQE",
    authDomain: "aquemarropa2-f91c8.firebaseapp.com",
    projectId: "aquemarropa2-f91c8",
    storageBucket: "aquemarropa2-f91c8.appspot.com",
    messagingSenderId: "192674429185",
    appId: "1:192674429185:web:f6023aa263669cedc9c300",
    measurementId: "G-MVDRRQ3ZN8"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export default db;