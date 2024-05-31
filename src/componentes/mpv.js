import React from 'react';
import './estilo-mpv.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import titulo from '../assets/titulo.png';



function Mpv() {
    return (

     <div className="mpv">
      <Row>
        <Col> 
          <div className="image-container">
            <img src={titulo} alt="Título MPV" className="titulo-mpv" />
          </div>
        </Col>

        <Col>
          <div className="video-container">
            <iframe src="https://youtu.be/rqFT2B7XCRk" title="Título del video" className="video-mpv" frameborder="0" allowfullscreen></iframe>
          </div>
        </Col>
      </Row>
      </div>
  );
}
     
  export default Mpv;