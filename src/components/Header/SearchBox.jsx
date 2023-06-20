import React from 'react';
import './SearchBox.scss'

const SearchBox = () => {
  return (
    <div className="nav__search--box">
      <input type="search" id="" placeholder="Realizá una búsqueda" />
      <span className="fa fa-search"></span>
    </div>
  );
}

export default SearchBox;
