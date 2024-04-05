import React from 'react';
import './Estilo-Reto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import conejo from '../assets/conejo-morado.png';
import Button from 'react-bootstrap/Button';

function Reto() {
    return (
        <Container fluid className="reto">

            <Row>
                <Col></Col>
                <Col md={5}>
                    <div>
                        <h1>
                            Una pascua<br />
                            muy EGGS-pecial
                        </h1>

                        <div class="container">

                            <div class="cuadrado">
                                <div className="conejo-morado">
                                    <img src={conejo} alt="Conejo Morado" className="conejo" />
                                </div>
                            </div>

                            <div class="cuadrado">
                                <p class="frase">
                                    "Comer <br />
                                    Empanadas"
                                </p>
                            </div>

                        </div>

                        <h3>
                            *Aplican Términos y Condiciones*
                        </h3>

                    </div>

                </Col>

                <Col md={5}>
                    <div>
                        <h2>
                            O3D:O2H:O3M
                        </h2>

                        <div class="container2">

                        <Button variant="" className='boton'>Descargar rescursos</Button>{' '}

                        </div>

                    </div>
                </Col>
                <Col></Col>
            </Row>
          

        </Container>
    );
  }
  
  export default Reto;