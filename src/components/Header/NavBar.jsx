import React, { useState } from 'react';
import './NavBar.scss';

const NavBar = () => {

  const [ menu , setMenu ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu )
    }

  return (
    <>

      <button 
        onClick={ toggleMenu }
        className='toggle-menu'>
        <span className="fa fa-bars" id="bars"></span>
      </button>

      <div className='nav__container'>
        <div className="nav__shopping--cart">
          <i className="fas fa-shopping-cart"></i>
        </div>

        <nav className={ `nav ${ menu ? 'isActive' : ''}` }>
          <ul>
              <li><a href="#">Productos</a></li>
              <li><a href="./nosotros.html">Nosotros</a></li>
              <li><a href="./alta.html">Dar alta</a></li>
              <li><a href="./contacto.html">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
