import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
