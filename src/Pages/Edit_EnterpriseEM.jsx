import Header_Admin from "../Composants/Navbar_Admin";
import Bar from "../Composants/BarRech";
import Edit_EntepriseEM from "../Composants/Edit_EntepriseEm";


function Edit_EntepriseEm() {
  return (
    <div className="tout1">
      <div className="bordu8">
        < Header_Admin />
        <Bar />
      </div>
      <div className="formulaire">
        <Edit_EntepriseEM/>
      </div>
    </div>
  );
}
export default Edit_EntepriseEm;
