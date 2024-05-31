import React from 'react';
import './estilo-cta.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mockup from '../assets/Mockup_App_web.png';
import descarga from '../assets/descarga.png';
import boton1 from '../assets/boton1.png';
import boton2 from '../assets/boton2.png';

function Cta() {
    return (

     <div className="cta">
      <Row>
        <Col> 
          <div className="mockup-container">
            <img src={mockup} alt="Mockup App" className="mockup" />
          </div>
        </Col>

        <Col>
        <div className="descarga-container">
        <img src={descarga} alt="Titulo Descarga" className="descarga"/>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit taciti neque, consequat curae <br/>
          libero tortor eu tincidunt nec fames, venenatis eleifend senectus class euismod<br/>
          dictum quis urna. Iaculis porttitor integernulla neque curabitur facilisis. </p>
          
          <Row>
        <Col>
        <img src={boton1} alt="Botón App Store" className="boton1"/>
       
        </Col>

        <Col>
        <img src={boton2} alt="Botón Google Play" className="boton2"/>
       
        </Col>
      </Row>
        </div>

        </Col>
      </Row>
      
   
      </div>
  );
}
     
 export default Cta;