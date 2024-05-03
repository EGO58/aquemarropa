import React from 'react';
import './Estilo-Definicion.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgDefinicion from '../assets/banner-definicion.jpg'
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
                    AQUEMARROPA
                </h1>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
                    <br/>
                    Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                    <div className="social-icons-definicion">
                        <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} className="icon-definicion" />
                        </a>
                        <a href="https://https://web.https://www.tiktok.com/explore.com/">
                        <FontAwesomeIcon icon={faTiktok} className="icon-definicion" />
                        </a>
                        <a href="https://https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon-definicion" />
                        </a>
                        <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} className="icon-definicion" />
                        </a>
                    </div>
            </Col>
        </Row>

      </div>  
    );
  }
  
  export default Definicion;