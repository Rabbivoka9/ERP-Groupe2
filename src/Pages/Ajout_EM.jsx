import Header_Admin from "../Composants/Navbar_Admin";
import Bar from "../Composants/BarRech";
import Ajout_EM from "../Composants/Inscription_Entreprise";
import '../Pages/styles/Ajout_EM.css'

function Ajout_Em() {
  return (
    <div className="tout1">
      <div className="bordu8">
        < Header_Admin />
        <Bar />
      </div>
      <div className="formulaire">
        <Ajout_EM/>
      </div>
    </div>
  );
}
export default Ajout_Em;
