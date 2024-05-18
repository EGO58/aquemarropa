import React from 'react';
import './Estilo-Silueta.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import FotoPerfil from '../assets/foto-perfil.jpeg';
import TrofeoInicio from '../assets/trofeo-inicio.jpg';
import TrofeoSubir from '../assets/trofeo-subir.jpg';
import TrofeoBloqueado from '../assets/trofeo-bloqueado.jpg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import imagen1 from '../assets/post-01.jpg';
import imagen2 from '../assets/post-02.jpg';
import imagen3 from '../assets/post-03.jpg';
import imagen4 from '../assets/post-04.jpg';
import imagen5 from '../assets/post-05.jpg';
import imagen6 from '../assets/post-06.jpg';



function Silueta() {

    const imagenesPosts = [
        { id: 1, src: imagen1, alt: 'Descripción de la imagen 1' },
        { id: 2, src: imagen2, alt: 'Descripción de la imagen 2' },
        { id: 3, src: imagen3, alt: 'Descripción de la imagen 3' },
        { id: 4, src: imagen4, alt: 'Descripción de la imagen 4' },
        { id: 5, src: imagen5, alt: 'Descripción de la imagen 5' },
        { id: 6, src: imagen6, alt: 'Descripción de la imagen 6' },
        // Agrega más posts según sea necesario
      ];

    return (
      <div className="silueta">

        <Row>
            <Col>
                <h1>
                    AQUEMARROPA
                </h1>
            </Col>
        </Row>

        <Row>

            <Col>
                {/* espacio */}
            </Col>

            <Col md={6}>

                <Row className="info">
                    <Col md={3} className="foto">
                        <div className="foto-perfil-container">
                            <Image src={FotoPerfil} alt="Foto Perfil" className="foto-perfil" roundedCircle />
                        </div>
                    </Col>

                    <Col>
                        <Row>
                            <Col>
                                <h2>
                                    Mar Vázquez
                                </h2>
                            </Col>
                            
                            <Col className="arroba">
                                <h3>
                                    @mar.art
                                </h3>
                            </Col>
                        </Row>

                        <Row>
                            <h4>
                            Artista visual e ilustradora 📚✨<br/>
                            Transformando ideas en arte desde Medellín, Colombia 🇨🇴<br/>
                            🌸 Creaciones únicas y personalizadas<br/>
                            </h4>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Col>

                        <div>
                            <h5 className="titulo">
                                Trofeos
                                <div className="decoracion"></div>
                            </h5>
                            
                            <ul className="lista-trofeos">

                                <OverlayTrigger
                                key="trofeo1"
                                placement="top"
                                overlay={<Tooltip id="tooltip-trofeo1">Bienvenido al Culto</Tooltip>}
                                >
                                    <li><img src={TrofeoInicio} alt="Trofeo Inicio" className="trofeo-inicio" /></li>
                                </OverlayTrigger>

                                <OverlayTrigger
                                key="trofeo1"
                                placement="top"
                                overlay={<Tooltip id="tooltip-trofeo1">Que Todo el Mundo Te Vea</Tooltip>}
                                >
                                    <li><img src={TrofeoSubir} alt="Trofeo Subir" className="trofeo-inicio" /></li>
                                </OverlayTrigger>

                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                {/* Agrega más elementos según sea necesario */}
                            </ul>
                        </div>

                        <div>
                            <h5 className="titulo">
                                Insignias
                                <div className="decoracion"></div>
                            </h5>
                            
                            <ul className="lista-trofeos">

                                <OverlayTrigger
                                key="trofeo1"
                                placement="top"
                                overlay={<Tooltip id="tooltip-trofeo1">Bienvenido al Culto</Tooltip>}
                                >
                                    <li><img src={TrofeoInicio} alt="Trofeo Inicio" className="trofeo-inicio" /></li>
                                </OverlayTrigger>

                                <OverlayTrigger
                                key="trofeo1"
                                placement="top"
                                overlay={<Tooltip id="tooltip-trofeo1">Que Todo el Mundo Te Vea</Tooltip>}
                                >
                                    <li><img src={TrofeoSubir} alt="Trofeo Subir" className="trofeo-inicio" /></li>
                                </OverlayTrigger>

                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                    <li><img src={TrofeoBloqueado} alt="Trofeo Bloqueado" className="trofeo-bloqueado" /></li>
                                {/* Agrega más elementos según sea necesario */}
                            </ul>
                        </div>

                        <div>
                            <h5 className="titulo">
                                Posts
                                <div className="decoracion"></div>
                            </h5>

                            <div className="grid-container">
                                {imagenesPosts.map(imagen => (
                                    <div key={imagen.id} className="post">
                                        <Image src={imagen.src} alt={imagen.alt} rounded />
                                    </div>
                                ))}
                            </div>

                        </div>

                    </Col>
                </Row>
            </Col>

            <Col>
                {/* espacio */}
            </Col>

        </Row>

      </div>

);
}

export default Silueta;