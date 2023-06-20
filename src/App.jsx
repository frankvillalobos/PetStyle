import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        titulo= {'Ver juguetes'} 
      />
    </div>
  );
}

export default App;
