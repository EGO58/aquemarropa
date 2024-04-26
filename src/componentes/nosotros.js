import Cabezote from "./Cabezote";
import Definicion from "./Definicion";
import Footer from "./Footer";
import Logia from "./Logia";
import Padrinos from "./Padrinos";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app  from '..';
const db = getFirestore(app);

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


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