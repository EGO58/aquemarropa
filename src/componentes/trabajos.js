import '../App.css';
import Repositorio from './/Repositorio';
import Cabezote from './Cabezote';
import Footer from './Footer';



function trabajos () { 
    return (
      <div className="trabajos">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote ruta='trabajos'></Cabezote>
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
  