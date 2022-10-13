import './App.css';
import NavBar from './components/NavBar';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
