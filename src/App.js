// Importa Routes al posto di Switch
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contatti from './pages/Contatti';

const App = () => {
  return (
    <Router>
      {/* Utilizza Routes al posto di Switch */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </Router>
  );
};

export default App;
