import React from 'react';
import '../src/assets/styles/nosotros.scss';


const Nosotros = () => {
 return (
  <main>
    <div className='nosotros'>
      <div className='nosotros__image'>
        <div style={{backgroundImage:`url('./images/perro-nosotros.jpg')`}}>
        </div>
        <p>*Él es Moreno, su veterinario dice que es más feliz desde que le compran juguetitos.</p>
      </div> {/*Cierre de nosotros__image */}

      <div className='nosotros__container'>
        <h2>Sobre nosotros</h2>
        <p>
          ¡Bienvenidos a nuestra tienda en línea de juguetes para mascotas! Somos una empresa con más de 10 años de experiencia en el mercado de productos para animales, ubicada en Buenos Aires. <br />

          <br /> Nos apasiona el mundo de las mascotas y estamos comprometidos con su bienestar y felicidad. Por eso, en nuestra tienda encontrarás una gran variedad de juguetes y accesorios de alta calidad, cuidadosamente seleccionados para satisfacer las necesidades de tus mascotas. <br />

          <br /> Nos enfocamos en ofrecer productos seguros y divertidos que estimulen la actividad física y mental de tus mascotas, contribuyendo así a su salud y bienestar. Además, nos aseguramos de que nuestros productos sean respetuosos con el medio ambiente y amigables con los animales.<br />

          </p>
      </div>
    </div>
  </main>
 );
 }

export default Nosotros;