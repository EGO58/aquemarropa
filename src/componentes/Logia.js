import React from 'react';
import './Estilo-Logia.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import FotoAndres from '../assets/foto-andres.png'
import FotoDiego from '../assets/foto-diego.png'
import FotoAna from '../assets/foto-ana.png'
import IconoOjo from '../assets/icono-ojo.svg'


function Logia() {
    return (
      <div className="logia">

        <Row>
            <Col>
                <h1>
                    La <img src={IconoOjo} alt="Icono Ojo" className="icono-ojo" /> <br />
                    Logia
                </h1>
            </Col>

            <Col>
                    
                

                <Stack gap={3}>
                    <div className="cards-logia">
                        <Row>
                            <Col>
                                <div className="image-container-logia">
                                    <img src={FotoAndres} alt="Foto Andres" className="img-logia" />
                                </div>
                            </Col>
                                            
                            <Col md={8}>
                                <div>
                                    <h3>
                                        Desinner<br />
                                        Andrés Estrada<br />
                                        Diseñador Crossmedia
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="cards-logia">
                        <Row>
                            <Col>
                                <div className="image-container-logia">
                                    <img src={FotoDiego} alt="Foto Diego" className="img-logia" />
                                </div>
                            </Col>
                                    
                            <Col md={8}>
                                <div>
                                    <h3>
                                        EGO<br />
                                        Diego Ramírez<br />
                                        Diseñador Crossmedia
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="cards-logia">
                        <Row>
                            <Col>
                                <div className="image-container-logia">
                                    <img src={FotoAna} alt="Foto Ana" className="img-logia" />
                                </div>
                            </Col>
                                
                            <Col md={8}>
                                <div>
                                    <h3>
                                        Aqua<br />
                                        Ana Quintero<br />
                                        Diseñadora Crossmedia
                                    </h3>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Stack>
                        
            </Col>
            
        </Row>


      </div>  
    );
  }
  
  export default Logia;