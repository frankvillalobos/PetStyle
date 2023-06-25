import React, { useState } from 'react';
import './NavBar.scss';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
                {/* <li>
                  <link to='/Productos'>Productos</link>
                </li> */}
                <li>
                  <Link to='/Nosotros'>Nosotros</Link>
                </li>
                {/* <li>
                  <link to='/Alta'>Dar Alta</link>
                </li>
                <li>
                <link to='/Contacto'>Contacto</link>
                </li> */}
            </ul>
          </nav>
        </div>
      </>
  );
}

export default NavBar;
