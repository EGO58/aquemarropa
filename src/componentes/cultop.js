import '../App.css';
import Cabezote from './Cabezote';
import Footer from './Footer';
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