import Header_entreprise from "./Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import RectVend1 from "./RectAdmin"
import RectaVend2 from "./ReactVend2"
import RectaVend3 from "./ReactaVend3"
import FormCot1 from "./FormCota1"
import FormCot2 from "./FormCota2"
import FormCota3 from "../Composants/FormCotation3"


function Dashbord_Entreprise(){
    return(
        <div className="tout1">
            
            <div className="bordu">
                <Header_entreprise/>
                <Bar/>
            </div>
            <div className="gb">
                <div className="contToutrecta">
                    <RectVend1/>
                    <RectaVend2/>
                    <RectaVend3/>
                    <h3 className="titreFar">Cotations Recents</h3>
                    <div className="ligneFar"></div>
                </div>
                <div className="FormCo12">
                     <FormCot2/>
                    <FormCot1/>
                    <FormCota3/>
                    
                </div>
            </div>
            
            


            
        </div>
    )
}export default Dashbord_Entreprise