import React, { useState } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

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
                <li>
                  <Link to='/Productos'>Productos</Link>
                </li>
                <li>
                  <Link to='/Nosotros'>Nosotros</Link>
                </li>
                <li>
                  <Link to='/Alta'>Dar Alta</Link>
                </li>
                <li>
                  <Link to='/Contacto'>Contacto</Link>
                </li>
            </ul>
          </nav>
        </div>
      </>
  );
}

export default NavBar;
