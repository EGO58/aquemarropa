import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nosotros from './componentes/nosotros';
import Trabajos from './componentes/trabajos';
import Cultop from './componentes/cultop';
import Perfil from './componentes/perfil';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/nosotros",
    element: <Nosotros />,
  },


  {
    path: "/trabajos",
    element: <Trabajos />,
  },
 
  {
    path: "/cultop",
    element: <Cultop />,
  },

  {
    path: "/perfil",
    element: <Perfil />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4b2jqZXQiZNRMMnYWAVqY1mM7C1TH-pA",
  authDomain: "aquemarropa-4f5d1.firebaseapp.com",
  projectId: "aquemarropa-4f5d1",
  storageBucket: "aquemarropa-4f5d1.appspot.com",
  messagingSenderId: "957110858258",
  appId: "1:957110858258:web:863170c84670e3e417decb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
