import './App.css';
import Cabezote from './componentes/Cabezote';
import Footer from './componentes/Footer';


function cultop() { 
    return (
      <div className="App">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote></Cabezote>
        </header>
        <main>
          
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
  
  export default cultop;