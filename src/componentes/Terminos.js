import React from 'react';
import './Estilo-Terminos.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cabezote from './Cabezote';
import Footer from './Footer';

function Terminos() {
    return (
      <div>

        <header>
          <Cabezote></Cabezote>
        </header>
        <div className="terminos">
        <Row>
            <Col>
                <h1>
                    Términos <br/>
                    y Condiciones
                </h1>
            </Col>
        </Row>

        <Row>
            <Col>
                <p>
                Por favor, lee atentamente estos términos y condiciones antes de utilizar el sitio web de AQUEMARROPA.<br/>
                <br/>
                <br/>
                        <h2>1. Aceptación de los Términos.</h2>
                        
                        Al acceder y utilizar el sitio web de AQUEMARROPA, aceptas estar sujeto a estos términos y condiciones de uso, así como a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, te solicitamos que no utilices nuestro sitio.<br/>
                        <br/>
                        <br/>
                        <h2>2. Uso Apropiado.</h2>
                        
                        El sitio web de AQUEMARROPA es proporcionado únicamente para fines informativos y de comercio electrónico. No debes utilizar este sitio para ningún propósito ilegal o no autorizado.<br/>
                        <br/>
                        <br/>
                        <h2>3. Propiedad Intelectual.</h2>
                        
                        Todos los contenidos y materiales presentes en el sitio web de AQUEMARROPA, incluyendo, pero no limitado a, texto, gráficos, logotipos, imágenes y software, están protegidos por derechos de autor y otras leyes de propiedad intelectual. No tienes permiso para usar, copiar, modificar, distribuir o reproducir estos materiales sin autorización previa por escrito de AQUEMARROPA.<br/>
                        <br/>
                        <br/>
                        <h2>4. Enlaces a Terceros.</h2>
                        
                        El sitio web de AQUEMARROPA puede contener enlaces a sitios web de terceros que no están bajo nuestro control. No somos responsables del contenido, la precisión o las prácticas de privacidad de estos sitios web.<br/>
                        <br/>
                        <br/>
                        <h2>5. Limitación de Responsabilidad.</h2>
                        
                        El sitio web de AQUEMARROPA se proporciona "tal cual" y no ofrecemos garantías de ningún tipo, ya sean expresas o implícitas. No asumimos ninguna responsabilidad por cualquier daño o perjuicio derivado del uso de este sitio web.<br/>
                        <br/>
                        <br/>
                        <h2>6. Cambios en los Términos.</h2>
                        
                        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento sin previo aviso. Te recomendamos que revises periódicamente esta página para estar al tanto de cualquier cambio.<br/>
                        <br/>
                        <br/>
                        <h2>7. Ley Aplicable.</h2>
                        
                        Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes del Colombia y cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Medellín, Colombia.<br/>
                        <br/>
                        <br/>
                        <h2>8. Contacto.</h2>
                        
                        Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a través de ayuda@aquemarropa.com.<br/>
                        <br/>
                        Al utilizar el sitio web de AQUEMARROPA, aceptas estos términos y condiciones en su totalidad. Si no estás de acuerdo con alguno de estos términos, te solicitamos que no utilices nuestro sitio.<br/>
                        <br/>
                        <br/>
                        <br/>
                        Última actualización: 10/05/2024.
                </p>
            </Col>
        </Row>
        </div>
        

        <Footer></Footer>

      </div>

      

);
}

export default Terminos;