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
