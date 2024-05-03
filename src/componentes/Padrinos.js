import React from 'react';
import './Estilo-Padrinos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Padrino from '../assets/padrino.jpg';

function Padrinos() {
    return (
        <div className="padrinos">
            <Row>
                <Col>
                    <h1>
                        Padrinos Aquemarropa
                    </h1>
                </Col>
            </Row>


            <div className="galeria">
                <Row>
                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Padrino} alt="Foto Padrino 1" />
                    </Col>

                </Row>

            </div>
        </div>
    );
}
    
export default Padrinos;