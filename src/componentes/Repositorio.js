import React from 'react';
import './Estilo-Repositorio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ConejoRojo from '../assets/conejo-rojo.jpg';
import ConejoBlanco from '../assets/conejo-blanco.jpg';
import ConejoNegro from '../assets/conejo-negro.jpg';
import ConejoCafe from '../assets/conejo-cafe.jpg';
import Accordion from 'react-bootstrap/Accordion';
import PrimerLugar from '../assets/primer-lugar.jpg';
import SegundoLugar from '../assets/segundo-lugar.jpg';
import TercerLugar from '../assets/tercer-lugar.jpg';

function Repositorio() {
    return (
        <div className="repositorio">
        
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
                    
                    <Row>
                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                    </Row>

                        

                    </Accordion.Body>

                </Accordion.Item>
                



                <Accordion.Item eventKey="1">

                    <Accordion.Header className="titulo-acordeon">
                        Lo que sea que trate el reto 02
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
                    
                    <Row>
                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                    </Row>

                    </Accordion.Body>

                </Accordion.Item>
                
            </Accordion>


        </div>
    );
}
    
export default Repositorio;