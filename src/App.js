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
import './App.css';

function App () {
  return(
    <BrowserRouter>
     <Routes>
      <Route path="/Inscription" element={<Inscription/>}></Route> 
       <Route path="/Login" element={<Login/>}></Route> 
       <Route path="/dasbord" element={<Dashbord/>}></Route>
       <Route path="/Stock" element={<Stocks/>}></Route>
       <Route path="/Production" element={<Productions/>}></Route>
       <Route path="/Comptabilite" element={<Comptabilite/>}></Route>
       <Route path="/Commandes" element={<Commandes/>}></Route>
       <Route path="/Portefeuil" element={<Portefeuil/>}></Route>
       <Route path="/Conf" element={<Configuration/>}></Route>

      
     </Routes>
    </BrowserRouter>
  )
} export default App;

