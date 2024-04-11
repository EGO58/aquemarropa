import './App.css';
import Repositorio from './componentes/Repositorio';
import Cabezote from './componentes/Cabezote';
import Footer from './componentes/Footer';


function trabajos () { 
    return (
      <div className="trabajos">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote></Cabezote>
        </header>
        <main>
          <Repositorio></Repositorio>
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
  
  export default trabajos;
  