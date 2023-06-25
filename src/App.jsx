import React from 'react';
import { BrowserRouter as Router, Routes, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CardList from './components/Cards/CardList';
import Nosotros from './Nosotros';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
        <Routes>
            <Route path='/Nosotros' element={<Nosotros />} />
        </Routes>
      <Hero
        titulo= {'Ver juguetes'} 
      />
      <CardList />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
