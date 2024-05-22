import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

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
  const auth = getAuth(app);
  const storage = getStorage(app, "gs://aquemarropa2-f91c8.appspot.com");
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  const conexiones = {
    db: db,
    storage: storage,
    auth: auth,
    provider
  };
  export default conexiones;