import React from 'react';
import './Estilo-Culto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgPresentacion from '../assets/imagen-presentacion.png'
import ImgGaleria01 from '../assets/imagen-galeria-01.png'
import ImgGaleria02 from '../assets/imagen-galeria-02.png'
import ImgGaleria03 from '../assets/imagen-galeria-03.png'
import ImgGaleria04 from '../assets/imagen-galeria-04.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Culto() {
    return (
        <div className="culto">
    
            <Row>
                <Col>
                    <h1>
                        sobre<br />
                        El CULTO
                    </h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="image-container">
                        <img src={ImgPresentacion} alt="Imagen Presentacion" className="img-presentacion" />
                    </div>
                </Col>

                <Col>
                    <div>
                        <h2>
                            Desinner
                        </h2>

                        <h3>
                            Andrés Estrada
                        </h3>
                        
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit taciti neque, consequat curae libero tortor eu tincidunt nec fames, venenatis eleifend senectus class euismod dictum quis urna. Iaculis porttitor integer nulla neque curabitur facilisis torquent, consequat senectus gravida vivamus dignissim vel, ut in primis molestie sociis aliquam.
                        </p>

                        <div className="social-icons">
                            <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} className="icon-culto" />
                            </a>
                            <a href="https://https://web.https://www.tiktok.com/explore.com/">
                            <FontAwesomeIcon icon={faTiktok} className="icon-culto" />
                            </a>
                            <a href="https://https://web.whatsapp.com/">
                            <FontAwesomeIcon icon={faWhatsapp} className="icon-culto" />
                            </a>
                            <a href="https://twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} className="icon-culto" />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="image-container-galeria">
                        <img src={ImgGaleria01} alt="Imagen Galeria 01" className="img-galeria" />
                    </div>
                </Col>

                <Col>
                    <div className="image-container-galeria">
                        <img src={ImgGaleria02} alt="Imagen Galeria 02" className="img-galeria" />
                    </div>
                </Col>

                <Col>
                    <div className="image-container-galeria">
                        <img src={ImgGaleria03} alt="Imagen Galeria 03" className="img-galeria" />
                    </div>
                </Col>

                <Col>
                    <div className="image-container-galeria">
                        <img src={ImgGaleria04} alt="Imagen Galeria 04" className="img-galeria" />
                    </div>
                </Col>
            </Row>

        </div>
    );
  }
  
  export default Culto;