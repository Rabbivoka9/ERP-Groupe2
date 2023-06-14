import Header_Admin from "../Composants/Navbar_Admin";
import Bar from "../Composants/BarRech";
import Edit_EntepriseEm from "../Composants/Edit_EntepriseEm";
import '../Pages/styles/Ajout_EM.css'

function Edit_EnterpriseEM() {
  return (
    <div className="tout1">
      <div className="bordu8">
        < Header_Admin />
        <Bar/>
      </div>
      <div className="formulaire">
        <Edit_EntepriseEm/>
      </div>
    </div>
  );
}
export default Edit_EnterpriseEM;
