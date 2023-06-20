import React from 'react';
import './Footer.scss';
import Logo from '../Header/Logo'
import '../Header/Logo.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className='logo--footer__container'>
        <Logo />
      </div>
      <div className="footer__container">
            <div className="footer__secciones">
                <ul>
                    <h2>Nuestro sitio</h2>
                    <ul>
                        <li><a href="#">Productos</a></li>
                        <li><a href="./nosotros.html">Nosotros</a></li>
                        <li><a href="./alta.html">Dar alta</a></li>
                        <li><a href="./contacto.html">Contacto</a></li>
                    </ul>
                </ul>
            </div>
            <div className="footer__productos">
                <ul>
                    <h2>Nuestros productos</h2>
                    <ul>
                        <li><a href="#">Perros</a></li>
                        <li><a href="./nosotros.html">Gatos</a></li>
                        <li><a href="./alta.html">Aves</a></li>
                        <li><a href="./contacto.html">Roedores</a></li>
                        <li><a href="./contacto.html">Otros</a></li>
                    </ul>
                </ul>
            </div>
            <div className="footer__seguinos">
                <h2>Seguinos</h2>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-tiktok"></i></a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;