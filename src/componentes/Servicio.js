import React from 'react';
import './Estilo-Servicio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Telefono from '../assets/telefono.png';
import Cabezote from './Cabezote';
import Footer from './Footer';

function Servicio() {
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

            <div className='formulario'>

                <select class="form-select form-select-sm" aria-label="Small select example">
                    <option selected>Elige un Tema</option>
                    <option value="1">Obtener Ayuda</option>
                    <option value="2">Comentarios Sobre la Aplicación AQUEMARROPA</option>
                    <option value="3">Comentarios de Programación</option>
                    <option value="4">Solicitud</option>
                    <option value="4">Me Secuestraron :c </option>
                </select>

                <br/>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Dirección de Correo Electrónico</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com" />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">¿Qué te gustaría compartir?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

            </div>


                <h3>
                La información de este formulario es registrada por nuestros proveedores de servicios de software con fines de servicio al cliente para operar y mejorar nuestros servicios. Al utilizar este formulario, usted acepta este uso de los datos.<br/>
                <br/>
                Al enviar tu correo electrónico, aceptas los <a href="/terminos-y-condiciones" class="link">Términos y Condiciones</a> y reconoces que has leído nuestra <a href="/politica-de-privacidad" class="link">Política de Privacidad</a>.
                </h3>

                <br/>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary" className="boton-enviar" type="submit">Enviar</button>
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