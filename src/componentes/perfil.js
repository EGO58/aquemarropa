import '../App.css';
import Cabezote from './Cabezote';
import Footer from './Footer';
import Registro from './Registro';

function perfil() { 
    return (
      <div className="App">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote></Cabezote>
        </header>
        <main>
          <Registro></Registro>
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
  
  export default perfil;