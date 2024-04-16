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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
