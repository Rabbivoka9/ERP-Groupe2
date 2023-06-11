import Header_Vendeur from "./Navbar_Vendeur"
import Bar from "../Composants/BarRech"
import RectAmin from "./RectAdmin"
import RectAdmin2 from "./RectAmin2"
import RectAdmin3 from "./RectAmin3"
import FormCota1 from "../Composants/FormCotation"
import FormCota2 from "../Composants/FormCotation1"
import FormCota3 from "../Composants/FormCotation3"


function Dashbord_Vendeur(){
    return(
        <div className="tout1">
            
            <div className="bordu">
                <Header_Vendeur/>
                <Bar/>
            </div>
            <div className="gb">
                <div className="contToutrecta">
                    <RectAmin/>
                    <RectAdmin2/>
                    <RectAdmin3/>
                    <h3 className="titreFar">Utilisateurs Recents</h3>
                    <div className="ligneFar"></div>
                </div>
                <div className="FormCo">
                    <FormCota1/>
                    <FormCota2/>
                    <FormCota3/>
                </div>
            </div>
            
            


            
        </div>
    )
}export default Dashbord_Vendeur