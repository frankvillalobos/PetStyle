import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './NavBar';
import './Header.scss'

const Header = () => {
  return (
    <header>
      <Logo />
      <SearchBox />
      <NavBar />
    </header>
  );
}

export default Header;

