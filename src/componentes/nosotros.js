import './App.css';
import Cabezote from './componentes/Cabezote';
import Definicion from './componentes/Definicion';
import Logia from './componentes/Logia';
import Padrinos from './componentes/Padrinos';
import Footer from './componentes/Footer';

function nosotros() { 
    return (
      <div className="nosotros">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote></Cabezote>
        </header>
        <main>
         
          <Definicion></Definicion>
          <Logia></Logia>
          <Padrinos></Padrinos>
          {/* Contenido principal de tu aplicación */}
          
        </main>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
  }
  
  export default nosotros;