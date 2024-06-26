import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import './Estilo-Servicio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Telefono from '../assets/telefono.png';
import Cabezote from './Cabezote';
import Footer from './Footer';
import conexiones from '../config';

function Servicio() {

    const [tema, setTema] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(conexiones.db, "solicitudes"), {
                tema: tema,
                email: email,
                mensaje: mensaje,
                timestamp: new Date()
            });
            alert("Solicitud enviada correctamente!");
        } catch (e) {
            console.error("Error al enviar la solicitud: ", e);
            alert("Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.");
        }
    };


    return (
      <div>

        <header>
            <Cabezote></Cabezote>
        </header>

        <div className="servicio">

        <Row>
            <Col>
                <h1>
                    Servicio <br/>
                    al Cliente
                </h1>
            </Col>
        </Row>

        <Row>

            

            <Col>
                <p>
                    <h2>¿Tienes dudas o inquietudes sobre AQUEMARROPA?</h2>
                    <br/>
                    Nos encantaría saber de ti.<br/>
                    <br/>
                    Si necesitas ayuda con AQUEMARROPA, comunícate con nosotros.<br/>
                    <br/>
                </p>

            <form onSubmit={handleSubmit}>
                <div className='formulario'>

                <select className="form-select form-select-sm" aria-label="Small select example" value={tema} onChange={(e) => setTema(e.target.value)}>
                        <option selected>Elige un Tema</option>
                        <option value="1">Obtener Ayuda</option>
                        <option value="2">Comentarios Sobre la Aplicación AQUEMARROPA</option>
                        <option value="3">Comentarios de Programación</option>
                        <option value="4">Solicitud</option>
                        <option value="4">Me Secuestraron :c </option>
                    </select>

                    <br/>

                    <div class="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Dirección de Correo Electrónico</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div class="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">¿Qué te gustaría compartir?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required></textarea>
                    </div>

                </div>
            </form>


                <h3>
                La información de este formulario es registrada por nuestros proveedores de servicios de software con fines de servicio al cliente para operar y mejorar nuestros servicios. Al utilizar este formulario, usted acepta este uso de los datos.<br/>
                <br/>
                Al enviar tu correo electrónico, aceptas los <a href="/terminos-y-condiciones" class="link">Términos y Condiciones</a> y reconoces que has leído nuestra <a href="/politica-de-privacidad" class="link">Política de Privacidad</a>.
                </h3>

                <br/>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Enviar</button>
                </div>

            </Col>

            <Col>
                <div className="image-container-telefono">
                    <img src={Telefono} alt="Imagen Telefono" className="img-telefono" />
                </div>
            </Col>

        </Row>

        </div>

       <Footer></Footer>

      </div>

      

);
}

export default Servicio;