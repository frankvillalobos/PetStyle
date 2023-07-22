import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CardList from './components/Cards/CardList';
import Nosotros from './Nosotros';
import Contacto from './Contacto';
import Alta from './Alta';

function App() {
  return (
      <div className="App">
        <Header />

        <Routes>
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/index.html"element={
            <>
              <Hero titulo={'Ver juguetes'} />
              <CardList />
            </>
          } />
            <Route exact path="/"element={
            <>
              <Hero titulo={'Ver juguetes'} />
              <CardList />
            </>
          } />
          <Route path="/Alta" element={<Alta />} /> 
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
  );
}

export default App;

 