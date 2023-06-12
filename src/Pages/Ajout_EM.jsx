import Header_Admin from "../Composants/Navbar_Admin";
import Bar from "../Composants/BarRech";
import Ajout_EM from "../Composants/Inscription_Entreprise";

function Ajout_Em() {
  return (
    <div className="tout1">
      <div className="bordu">
        <Header_Admin />
        <Bar />
      </div>
      <div>
        <Ajout_EM/>
      </div>
    </div>
  );
}
export default Ajout_Em;
