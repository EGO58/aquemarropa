import Cabezote from "./Cabezote";
import Definicion from "./Definicion";
import Footer from "./Footer";
import Logia from "./Logia";
import Padrinos from "./Padrinos";


function nosotros() { 
    return (
      <div className="nosotros">
        {/* Contenido principal de tu aplicación */}
        <header>
          <Cabezote />
        </header>
        <main>
         
          <Definicion />
          <Logia />
          <Padrinos />
          {/* Contenido principal de tu aplicación */}
          
        </main>
        {/* Footer */}
        <Footer />
      </div>
    );
  }
  
  export default nosotros;