import React from 'react';
import './Estilo-Cultos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ojo from '../assets/ojo_V3.gif';
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
                    <div className="image-container-ojo">
                        <a href="https://forms.gle/96V9U6ut3Kwc2HW46" target="_blank" rel="noopener noreferrer">
                            <img src={Ojo} alt="Gif Ojo" className="gif-ojo" />
                        </a>
                    </div>
                </Col>
            </Row>

        </div>

        <Footer></Footer>

</div>

);
}

export default Cultos;