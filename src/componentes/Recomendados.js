import React from 'react';
import './Estilo-Recomendados.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PosterPelicula from '../assets/poor-things-poster.png'
import PortadaLibro from '../assets/rick-rubin-portada.jpg'
import PortadaPodcast from '../assets/portada-podcast.jpg'
import PortadaArtista from '../assets/portada-artista.jpg'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import app  from '..';
const db = getFirestore(app);




function Reecomendados() {
    return (
        <div className="recomendados">

            <Row>
                <Col>
                    <h1>
                        Recomendados de la semana
                    </h1>
                </Col>
            </Row>
        
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <div className="image-container-recomendados">
                                <img src={PosterPelicula} alt="Poster Pelicula" className="img-recomendados" />
                            </div>

                            <h2>
                                Película:<br />
                                Poor Things - Yorgos Lanthimos
                            </h2>
                            {/* poor thing poster*/}
                        </Col>

                        <Col>
                            <div className="image-container-recomendados">
                                <img src={PortadaLibro} alt="Portada Libro" className="img-recomendados" />
                            </div>

                            <h2>
                                Libro:<br />
                                El Acto Creativo - Rick Rubin
                            </h2>
                            {/* portada libro*/}
                        </Col>
                    </Row>
                </Col>
                
                <Col>
                    
                    <Col>

                    <Stack gap={4}>

                        <div className="cards-recomendacion">
                            <Row className="horizontal-center align-items-center">
                                <Col>
                                    <div className="image-container-recomendados-cards">
                                        <img src={PortadaPodcast} alt="Portada Podcast" className="img-recomendados-cards" />
                                    </div>
                                </Col>

                                <Col>
                                    <div>
                                        <h3>
                                            Podcast:<br />
                                            Just Make Art Podcast
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                        <div className="cards-recomendacion">
                            <Row className="horizontal-center align-items-center">
                                <Col>
                                    <div className="image-container-recomendados-cards">
                                        <img src={PortadaArtista} alt="Portada Artista" className="img-recomendados-cards" />
                                    </div>
                                </Col>
                                    
                                <Col>
                                    <div>
                                        <h3>
                                            Banda/Artista:<br />
                                            Oblivions Mighty Trash<br />
                                            No Me Acuerdo
                                        </h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Stack> 

                    </Col>

                
                </Col>

            </Row>

        </div>
    
    );
  }
  
  export default Reecomendados;