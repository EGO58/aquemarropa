import React from 'react';
import './Estilo-Padrinos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Padrino from '../assets/padrino.jpg';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import  app  from '..';
const db = getFirestore(app);

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

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