import React from 'react';
import './Estilo-Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo_v1.JPG';


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
                        Términos y Condiciones<br />
                        Servicio al Cliente<br />
                        Política de Privacidad<br />
                        <br />
                        Calle 101A ·68-84│Candelaria<br />
                        aquemarropa@gmail.com<br />
                        318 336 8910<br />
                    </p>
                </Col>

                <Col>
                     <div className="social-icons">
                        <a href="https://www.instagram.com/">
                        <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>
                        <a href="https://https://web.https://www.tiktok.com/explore.com/">
                        <FontAwesomeIcon icon={faTiktok} className="icon" />
                        </a>
                        <a href="https://https://web.whatsapp.com/">
                        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                        </a>
                        <a href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>
                    </div>
                </Col>

            </Row>

      </div>
    );
  }
  
  export default Footer;