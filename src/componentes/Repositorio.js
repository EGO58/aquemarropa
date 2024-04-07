import React from 'react';
import './Estilo-Repositorio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import PrimerLugar from '../assets/primer-lugar.jpg';
import SegundoLugar from '../assets/segundo-lugar.jpg';
import TercerLugar from '../assets/tercer-lugar.jpg';

function Padrinos() {
    return (
        <div className="padrinos">
        
            <Row>
                <Col>
                    <h1>
                        Retos<br />
                        Aquemarropa
                    </h1>
                </Col>
            </Row>

            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">

                    <Accordion.Header className="titulo-acordeon">
                        Una pascua muy EGGS-pecial
                    </Accordion.Header>

                    <Accordion.Body>

                        <Row>
                            <Col>
                                <div className="image-container-ganadores">
                                    <img src={PrimerLugar} alt="Primer Lugar" className="img-ganadores" />
                                </div>
                            </Col>

                            <Col>
                                <div className="image-container-ganadores">
                                    <img src={SegundoLugar} alt="Segundo Lugar" className="img-ganadores" />
                                </div>
                            </Col>

                            <Col>
                                <div className="image-container-ganadores">
                                    <img src={TercerLugar} alt="Tercer Lugar" className="img-ganadores" />
                                </div>
                            </Col>

                        </Row>

                        <Row md={3}>
                            <Col>
                                <h2>
                                    #01
                                </h2>
                            </Col>

                            <Col>
                                <h2>
                                    #02
                                </h2>
                            </Col>

                            <Col>
                                <h2>
                                    #03
                                </h2>
                            </Col>
                        </Row>

                        

                    </Accordion.Body>

                </Accordion.Item>
                
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        Lo que sea que trate el reto 02
                    </Accordion.Header>

                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>

                </Accordion.Item>
            </Accordion>


        </div>
    );
}
    
export default Padrinos;