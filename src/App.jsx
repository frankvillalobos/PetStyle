import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import CardList from './components/Cards/CardList';
import Imagen from './assets/images/toy15.png';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        titulo= {'Ver juguetes'} 
      />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
