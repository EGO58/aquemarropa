import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Reto from './componentes/Reto'; 
import Culto from './componentes/Culto';
import Recomendados from './componentes/Recomendados';
import Definicion from './componentes/Definicion';
import Logia from './componentes/Logia';
import Padrinos from './componentes/Padrinos';
import Repositorio from './componentes/Repositorio';
import Registro from './componentes/Registro';
import Cabezote from './componentes/Cabezote';
import Silueta from './componentes/Silueta';
import { getFirestore } from "firebase/firestore";


function App() { 
  return (
    <div className="App">
      {/* Contenido principal de tu aplicación */}
      <header>
        <Cabezote ruta='inicio'></Cabezote>
      </header>
      <main>
      <Reto></Reto>
      <Culto></Culto>
      <Recomendados></Recomendados>

      </main>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
