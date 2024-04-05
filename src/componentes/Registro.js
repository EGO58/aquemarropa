import React from 'react';
import './Estilo-Registro.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IconoPerfil from '../assets/icono-perfil.svg';
import IconoCorreo from '../assets/icono-correo.svg';
import IconoContrasena from '../assets/icono-contrasena.svg';
import Correo from '../assets/logo-gmail-registro.jpg';

function Registro() {
    return (
      <div className="registro">

        <Row>
            <Col>
                <h1>
                    AQUEMARROPA
                </h1>
            </Col>

            <Col xs={4} className="registro-form">

                <div className="icono-perfil-container">
                    <img src={IconoPerfil} alt="Icono Perfil" className="icono-perfil" />
                </div>

                <h2>
                    ¡REGÍSTRATE!
                </h2>

                <h3>
                    y participa en el reto
                </h3>


                <Form>
                <Form.Group className="forms" controlId="formBasicEmail">
                    <Form.Label>
                        <img src={IconoCorreo} alt="Icono Correo" className="icono-registro" /> Correo
                    </Form.Label>

                    <Form.Control type="email" placeholder="Correo" />

                    <Form.Text className="text-muted">
                        Nunca compartiremos tu correo con alguien más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="forms" controlId="formBasicPassword">
                    <Form.Label>
                        <img src={IconoContrasena} alt="Icono Contrasena" className="icono-registro" /> Contraseña
                    </Form.Label>

                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="forms" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar" />
                </Form.Group>

                <h4>
                    ——————  o  ——————
                </h4>

                <div>
                    <div className="image-container-correo">
                        <img src={Correo} alt="Imagen Correo" className="img-correo" />
                    </div>
                </div>

                <Button variant="" className="boton-registro" type="submit">
                    Registrarme
                </Button>

                </Form>
            </Col>

            <Col>
            
            </Col>
        </Row>

      </div>

);
}

export default Registro;