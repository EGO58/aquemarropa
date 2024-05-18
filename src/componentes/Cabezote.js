import './Estilo-Cabezote.css';
import logo from '../assets/p-ojo-cabezote.png';
import iconologin from '../assets/iconloginhome.png';


function Cabezote({ruta}) {
    let inicio = '';
    let nosotros = '';
    let trabajos = '';
    let culto = '';

    if (ruta == 'inicio') {
        inicio = 'seleccionado';
    }

    if (ruta == 'nosotros') {
        nosotros = 'seleccionado';
    }

    if (ruta == 'trabajos') {
        trabajos = 'seleccionado';
    }

    if (ruta == 'culto') {
        culto = 'seleccionado';
    }



    console.log(ruta);

    return (
        <>
            <div className="Head">

                <div className="logo">
                <img src={logo} alt="Logo Aquemarropa Corp" />

            </div>
                <div className="menu">
                    
                    <ul>
                        <li className={inicio}><a href={`/`}>Inicio</a></li>
                        <li className={nosotros}><a href={`/nosotros`}>Nosotros</a></li>
                        <li className={trabajos}><a href= {`/trabajos`}>Trabajos</a></li>
                        <li><a href={`/culto`}>Culto</a></li>
                    </ul>
                </div>

                <div className='loginmenu'>
                <ul> 
                  <a href={`/perfil`}> Entrar </a>
                  <img src={iconologin} alt="icono de login"/> 
                </ul>
    
                </div>
        
            </div>
        
        </>
    );
  }
  
  export default Cabezote;
  