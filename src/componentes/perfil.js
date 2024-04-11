import './App.css';
import Cabezote from './componentes/Cabezote';
import Footer from './componentes/Footer';
import Registro from './componentes/Registro';

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