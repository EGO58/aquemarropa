import React, {useState, useEffect  } from 'react';
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
import { collection, query, where, getDocs } from "firebase/firestore";
import conexiones from '../config';

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


const Repositorio = () => {
    const [collectionData, setCollectionData] = useState([]);


    useEffect(() => {
        const getCollectionData = async () => {

            const q = query(collection(conexiones.db, "Retos_semanales"));
            const querySnapshot = await getDocs(q);
            const retos = [];
            querySnapshot.forEach(async (doc) => {
                // doc.data() is never undefined for query doc snapshots
                const id = doc.id;
                console.log(doc.id, " => ", doc.data());
                retos.push(
                    {
                        'id': doc.id,
                        'datos': doc.data(),
                    }
                );
            }); 
          
          setCollectionData(retos);
        };
        getCollectionData();
        console.log('coleccion estraida', collectionData);
      }, []);

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
                
                {
                    collectionData.map(reto => 
                    
                        <Accordion.Item eventKey="0">

                        <Accordion.Header className="titulo-acordeon">
                            
                                {reto.datos.nombre}
                            
                        </Accordion.Header>
    
                        <Accordion.Body>
    
                            <Row>
                            {
                                reto.datos.participantes.map(participante => 
                                    <Col>
                                    <div className="image-container-ganadores">
                                        <img src={participante.imageUrl} alt="Primer Lugar" className="img-ganadores" />
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
                
                )
                }
                
                
            </Accordion>

           

        </div>


    );
}
    
export default Repositorio;