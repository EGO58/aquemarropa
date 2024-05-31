import React from "react";
import './Estilo-Reto.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import conejo from '../assets/conejo-morado-v2.png';
import Button from 'react-bootstrap/Button';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Completionist = () => <span>El reto a finalizado</span>;


function Reto() {
    return (
        <Container fluid className="reto">

            <Row>
                <Col></Col>

                <Col>
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

                        <h2>
                            *Aplican Términos y Condiciones*
                        </h2>

                    </div>

                </Col>

                <Col></Col>

                <Col>
                    <div>
                        <div>
                            <Countdown className="contador" date={Date.now() + 912345678}>
                                <Completionist />
                            </Countdown>,
                        </div>

                        <div className="container2">
                            <a href="/Reto-Conejo.zip" download>
                                <Button variant="" className='boton'>Descargar recursos</Button>
                            </a>
                        </div>
                    </div>
                </Col>

                <Col></Col>
            </Row>
          

        </Container>
    );
  }
  
  export default Reto;