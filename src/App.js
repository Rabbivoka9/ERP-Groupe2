import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashbord from "./Pages/Dasbord";
import Stocks from "./Pages/Stock";
import Productions from "./Pages/Production";
import Portefeuil from "./Pages/Portefeuil";
import Comptabilite from "./Pages/Comptabilite";
import Commandes from "./Pages/Commandes";
import Configuration from "./Pages/Conf";
import Inscription from "./Composants/Inscriptuion";
import Fournisseurs from "./Pages/fournisseurs";
import Goffres from "./Pages/Goffres";
import Dcotation from "./Pages/Dcotation";
import CommandeEm from "./Pages/CommandeEm";
import Entreprise from "./Pages/Entreprise";
import Vendeur from "./Pages/Vendeur";
import Articles from "./Pages/Articles";
import './App.css';

function App () {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/Inscription" element={<Inscription/>}></Route> 
       <Route path="/" element={<Login/>}></Route> 
       <Route path="/dasbord" element={<Dashbord/>}></Route>
       <Route path="/Stock" element={<Stocks/>}></Route>
       <Route path="/Production" element={<Productions/>}></Route>
       <Route path="/Comptabilite" element={<Comptabilite/>}></Route>
       <Route path="/Commandes" element={<Commandes/>}></Route>
       <Route path="/CommandeEm" element={<CommandeEm/>}></Route>
       <Route path="/Dcotation" element={<Dcotation/>}></Route>
       <Route path="/Fournisseurs" element={<Fournisseurs/>}></Route>
       <Route path="/Goffres" element={<Goffres/>}></Route>
       <Route path="/Portefeuil" element={<Portefeuil/>}></Route>
       <Route path="/Entreprise" element={<Entreprise/>}></Route>
       <Route path="/Vendeur" element={<Vendeur/>}></Route>
       <Route path="/Articles" element={<Articles/>}></Route>


       <Route path="/Conf" element={<Configuration/>}></Route>

      
     </Routes>
    </BrowserRouter>
  )
} export default App;

