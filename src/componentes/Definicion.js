import React from 'react';
import './Estilo-Definicion.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgDefinicion from '../assets/imagen-definicion.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Definicion() {
    return (
      <div className="definicion">

        <Row>
            <Col>
                <div className="image-container-definicion">
                    <img src={ImgDefinicion} alt="Imagen Definicion Aquemarropa" className="img-definicion" />
                </div>
            </Col>

            <Col md={7}>
                <h1>
                    4QU3M4RR0P4
                </h1>
                
                <p>
                    Imagina una aplicación revolucionaria diseñada para liberar todo tu potencial creativo.
                    Eso es AQUEMARROPA, una aplicación que ha llegado para exterminar bloqueos, combatir la procrastinación y hacer de la creatividad tu mayor hábito.<br/>
                    <br/>
                    Por medio de desafíos periódicos, fomentaremos la capacidad de plasmar ideas y retarse a sí mismo, así como la colaboración con marcas nacionales e internacionales, la visibilización y la pertenencia a la comunidad creativa latinoamericana.
                </p>

                    <div className="social-icons-definicion">
                        <a href="https://www.instagram.com/rockero_estrada/">
                        <FontAwesomeIcon icon={faInstagram} className="icon-definicion" />
                        </a>
                        <a href="https://www.tiktok.com/@desinner______?lang=es">
                        <FontAwesomeIcon icon={faTiktok} className="icon-definicion" />
                        </a>
                        <a href="https://https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon-definicion" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                        <FontAwesomeIcon icon={faTwitter} className="icon-definicion" />
                        </a>
                    </div>
            </Col>
        </Row>

      </div>  
    );
  }
  
  export default Definicion;