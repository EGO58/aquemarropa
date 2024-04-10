import './Estilo-Cabezote.css';
import logo from '../assets/p-ojo-cabezote.png';
import iconologin from '../assets/iconloginhome.png';

function Cabezote() {
    return (
        <>
            <div className="Head">

                <div className="logo">
                <img src={logo} alt="Logo Aquemarropa Corp" />

            </div>
                <div className="menu">
                    
                    <ul>
                        <li className='seleccionado'><a href="#inicio">Inicio</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#trabajos">Trabajos</a></li>
                        <li><a href="#culto">Culto</a></li>
                        <li><a href="#tienda">Tienda</a></li>
                    </ul>
                </div>

                <div className='loginmenu'>
                <ul> 
                  <a href="#perfil"> Entrar </a>
                  <img src={iconologin} alt="icono de login"/> 
                </ul>
    
                </div>
        
            </div>
        
        </>
    );
  }
  
  export default Cabezote;
  