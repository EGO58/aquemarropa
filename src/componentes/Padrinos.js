import React from 'react';
import './Estilo-Padrinos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adidas from '../assets/adidas.png';
import Bacanika from '../assets/bacanika.png';
import Comfama from '../assets/comfama.png';
import Mario from '../assets/mario-hernandez.png';
import True from '../assets/true.png';
import Vibes from '../assets/vibes.png';

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
                        <img src={Adidas} alt="Logo Adidas" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Bacanika} alt="Logo Bacanika" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Comfama} alt="Logo Comfama" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Mario} alt="Logo Mario Hernandez" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={True} alt="Logo True" />
                    </Col>

                    <Col xs={4} md={2}>
                        <img src={Vibes} alt="Logo Vibes" />
                    </Col>

                </Row>

            </div>
        </div>
    );
}
    
export default Padrinos;