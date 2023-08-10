import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/Home';
import MenAndMixte from './components/MenAndMixte';
import WomenAndMixte from './components/WomenAndMixte';
import Details from './components/Details';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/men-and-mixte">Homme</Link>
          <Link to="/women-and-mixte">Femmes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men-and-mixte" element={<MenAndMixte />} />
          <Route path="/women-and-mixte" element={<WomenAndMixte />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
