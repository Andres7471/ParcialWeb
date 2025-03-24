import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContestantList from './components/ContestantList';
import BattleList from './components/BattleList';
import DictatorList from './components/DictatorList';
import SponsorList from './components/SponsorList';
import BlackMarketTransactionList from './components/BlackMarketTransactionList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>LUCHA MUERE</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/contestants">Concursantes</Link>
              </li>
              <li>
                <Link to="/battles">Batallas</Link>
              </li>
              <li>
                <Link to="/dictators">Dictadores</Link>
              </li>
              <li>
                <Link to="/sponsors">Patrocinadores</Link>
              </li>
              <li>
                <Link to="/black-market">Mercado Negro</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2>¡Bienvenido a LUCHA MUERE!</h2>} />
            <Route path="/contestants" element={<ContestantList />} />
            <Route path="/battles" element={<BattleList />} />
            <Route path="/dictators" element={<DictatorList />} />
            <Route path="/sponsors" element={<SponsorList />} />
            <Route path="/black-market" element={<BlackMarketTransactionList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;