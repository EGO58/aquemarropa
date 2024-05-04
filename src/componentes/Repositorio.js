import React from 'react';
import './Estilo-Repositorio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ConejoRojo from '../assets/conejo-rojo.jpg';
import ConejoBlanco from '../assets/conejo-blanco.jpg';
import ConejoNegro from '../assets/conejo-negro.jpg';
import ConejoCafe from '../assets/conejo-cafe.jpg';
import Accordion from 'react-bootstrap/Accordion';
import PrimerLugar from '../assets/primer-lugar.jpg';
import SegundoLugar from '../assets/segundo-lugar.jpg';
import TercerLugar from '../assets/tercer-lugar.jpg';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { collection, getDocs } from "firebase/firestore"; 
import conexiones from '../config';

const querySnapshot = await getDocs(collection(conexiones.db, "Retos_semanales"));
const retoscol = conexiones.db.collection('Retos_semanales').get();
const retos = [];

for (const doc in retoscol.docs) {
    console.log(doc);
}


/*
querySnapshot.forEach(async (doc) => {
    const participantes = await getDocs(collection(conexiones.db, `Retos_semanales/${doc.id}/Participantes`));
    const listadop = [];
    participantes.forEach(async (p) => {
        const gsReference = ref(conexiones.storage, p.data().fotos);
        const participante = {
            id: p.id,
            foto: await getDownloadURL(gsReference),
            id_user: p.data().id_user
        };
        listadop.push(participante);
    });
  const reto = {
    id: doc.id,
    descripcion: doc.data().descripcion_reto,
    fecha: doc.data().fecha_publicacion,
    participantes: listadop
  };
  //console.log(`${doc.id} => ${doc.data()}`);
  //console.log(reto);
  retos.push(reto);
});*/


console.log('Estos son los retos => ', retos);

function Repositorio() {
    return (
        <div className="repositorio">
        
            <Row>
                <Col>
                    <h1>
                        Retos<br />
                        Aquemarropa
                    </h1>
                </Col>
            </Row>

            <Accordion defaultActiveKey="0" flush>

            {retos.map(reto =>
                <Accordion.Item eventKey={reto.id}>

                    <Accordion.Header className="titulo-acordeon">
                        
                            Una pascua muy EGGS-pecial
                        
                    </Accordion.Header>

                    <Accordion.Body>

                        <Row>
                           {
                            reto.participantes.map(participante => 
                                <Col>
                                <div className="image-container-ganadores">
                                    <img src={PrimerLugar} alt="Primer Lugar" className="img-ganadores" />
                                </div>
                            </Col>
                            )
                           }
                            
                        

                        </Row>

                        <Row md={3}>
                            <Col>
                                <h2>
                                    #01
                                </h2>
                            </Col>

                            <Col>
                                <h2>
                                    #02
                                </h2>
                            </Col>

                            <Col>
                                <h2>
                                    #03
                                </h2>
                            </Col>
                        </Row>
                    
                    <Row>
                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                        </Carousel>

                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                        <Col>

                        <Carousel>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoRojo} alt="Conejo Rojo" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoBlanco} alt="Conejo Blanco" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                        <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoCafe} alt="Conejo Cafe" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                    <div className="image-container-ganadores">
                                        <img src={ConejoNegro} alt="Conejo Negro" className="img-ganadores" />
                                    </div>
                                <Carousel.Caption>
                                    <p>@artista</p>
                                </Carousel.Caption>
                            </Carousel.Item>

                            </Carousel>


                        </Col>


                    </Row>

                        

                    </Accordion.Body>

                </Accordion.Item>
              )}



                
                
            </Accordion>


        </div>
    );
}
    
export default Repositorio;