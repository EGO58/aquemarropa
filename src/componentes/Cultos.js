import React from 'react';
import './Estilo-Cultos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ojo from '../assets/post-02.jpg';
import Cabezote from './Cabezote';
import Footer from './Footer';

function Cultos() {
    return (

        <div>

        <header>
          <Cabezote></Cabezote>
        </header>

      <div className="cultos">

            <Row>
                <Col>
                    <div className="image-container-galeria">
                        <img src={Ojo} alt="Gif Ojo" className="gif-ojo" />
                    </div>
                </Col>
            </Row>

        </div>

        <Footer></Footer>

</div>

);
}

export default Cultos;