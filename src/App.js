import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import './App.css';

import Login from './Pages/Login';
import Dashbord from './Pages/Dasbord';
import Stocks from './Pages/Stock';
import Productions from './Pages/Production';
import Portefeuil from './Pages/Portefeuil';
import Comptabilite from './Pages/Comptabilite';
import Commandes from './Pages/Commandes';
import Configuration from './Pages/Conf';
import Inscription from './Composants/Inscriptuion';
import Fournisseurs from './Pages/fournisseurs';
import Goffres from './Pages/Goffres';
import Dcotation from './Pages/Dcotation';
import CommandeEm from './Pages/CommandeEm';
import Entreprise from './Pages/Entreprise';
import Vendeur from './Pages/Vendeur';
import Articles from './Pages/Articles';

// Définir l'élément racine de votre application
Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/" element={<Login />} />
        <Route path="/dasbord" element={<Dashbord />} />
        <Route path="/Stock" element={<Stocks />} />
        <Route path="/Production" element={<Productions />} />
        <Route path="/Comptabilite" element={<Comptabilite />} />
        <Route path="/Commandes" element={<Commandes />} />
        <Route path="/CommandeEm" element={<CommandeEm />} />
        <Route path="/Dcotation" element={<Dcotation />} />
        <Route path="/Fournisseurs" element={<Fournisseurs />} />
        <Route path="/Goffres" element={<Goffres />} />
        <Route path="/Portefeuil" element={<Portefeuil />} />
        <Route path="/Entreprise" element={<Entreprise />} />
        <Route path="/Vendeur" element={<Vendeur />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Conf" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

