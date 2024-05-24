import React from 'react';
import './Estilo-Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo-aquemarropa.png';


function Footer() {
    return (
      <div className="footer">

            <Row>

                <Col>   
                    <div className="logo-container">
                        <img src={logo} alt="Logo Aquemarropa" className="logo" />
                    </div>
                    
                </Col>

                <Col>
                    <p>
                        <a href="/terminos-y-condiciones" class="link">Términos y Condiciones</a> <br />
                        <a href="/servicio-al-cliente" class="link">Servicio al Cliente</a> <br/>
                        <a href="/politica-de-privacidad" class="link">Política de Privacidad</a> <br />
                        <br />
                        Calle 101A ·68-84│Candelaria<br />
                        aquemarropa@gmail.com<br />
                        318 336 8910<br />
                    </p>
                </Col>

                <Col>
                     <div className="social-icons">
                        <a href="https://www.instagram.com/rockero_estrada/">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://www.tiktok.com/@desinner______?lang=es">
                        <FontAwesomeIcon icon={faTiktok} className="icon" />
                        </a>
                        <a href="https://https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0/">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                    </div>
                </Col>

            </Row>

      </div>
    );
  }
  
  export default Footer;