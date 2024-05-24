import React, { useState } from 'react';
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
import conexiones from '../config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '@fortawesome/fontawesome-free/css/all.min.css';



function Registro() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(conexiones.auth, email, password);
          alert('Login successful');
          window.open('/Silueta','_self');
        } catch (error) {
          alert(error.message);
        }
      };

      const togglePasswordVisibility = () => { // Nueva línea
        setShowPassword(!showPassword); // Nueva línea
    };


    

    return (
      <div className="registro">

        <Row>
            <Col>
                <h1>
                    4QU3M4RR0P4
                </h1>
            </Col>
        </Row>


        <Row>
            <Col>
            
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

                    <Form.Control type="email" value= {email} placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />

                    <Form.Text className="text-muted">
                        Nunca compartiremos tu correo con alguien más.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="forms" controlId="formBasicPassword">
                    <Form.Label>
                        <img src={IconoContrasena} alt="Icono Contrasena" className="icono-registro" /> Contraseña
                    </Form.Label>

                    <div className="password-container">
                        <Form.Control 
                            type={showPassword ? "text" : "password"} 
                            value={password} 
                            placeholder="Contraseña" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <Button variant="link" onClick={togglePasswordVisibility} className="eye-button">
                            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                        </Button>
                    </div>
                </Form.Group>


                <h4>
                    ——————  o  ——————
                </h4>

                <div>
                    <div className="image-container-correo">
                        <img src={Correo} alt="Imagen Correo" className="img-correo" />
                    </div>
                </div>

                <Button variant="" className="boton-registro" type="submit" onClick={handleLogin} href={`/Silueta`}>
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