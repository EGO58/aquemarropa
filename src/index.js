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
import Terminos from './componentes/Terminos';
import Servicio from './componentes/Servicio';
import Privacidad from './componentes/Privacidad';
import Silueta from './componentes/Silueta';
import Cultos from './componentes/Cultos';


// Initialize Firebase
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

  {
    path: "/terminos-y-condiciones",
    element: <Terminos/>,
  },

  {
    path: "/servicio-al-cliente",
    element: <Servicio/>,
  },

  {
    path: "/politica-de-privacidad",
    element: <Privacidad/>,
  },

  {
    path: "/Silueta",
    element: <Silueta/>,
  
  },

  {
    path: "/politica-de-privacidad",
    element: <Privacidad/>,
  },

  {
    path: "/cultos",
    element: <Cultos/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//const analytics = getAnalytics(app);
//export default app;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

reportWebVitals();
