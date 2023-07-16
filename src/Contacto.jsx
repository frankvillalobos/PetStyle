import React from 'react';
import ContactForm from './components/Formularios/ContactForm';
import '../src/assets/styles/contacto.scss';

const Contacto = () => {
 return (
<main>
    <div className="cat__image" style={{backgroundImage:`url('./images/gato-contacto.jpg')`}}></div>
    <div className="contactForm__container">
        <div className="contactForm__items">
            <div className="contactForm__submit">
                <div className="contactForm__title">Contáctanos</div>
                <ContactForm />
            </div>
            <div className="contactForm__info">
                <div className="contactForm__title">Centro de ayuda</div>
                <div className="contactForm__icons">
                    <ul>
                        <li>
                            <i className="fa-solid fa-phone-volume"></i>
                            <span>Teléfono</span>
                            <a href="#">+54 9 11 2851-5045</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-envelope"></i>
                            <span>Correo</span>
                            <a href="#">prueba@prueba.com</a>
                        </li>
                        <li>
                            <i className="fa-regular fa-map"></i>
                            <span>Dirección</span>
                            <a href="#">Old Trafford, Manchester City</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
 );
 }

export default Contacto;