import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import FormProd from "../Composants/FormProd1"
import FormProd2 from "../Composants/FormProd2"
import FormProd3 from "../Composants/FormProd3"
import Tableau from "../Composants/Tableau"




function Productions(){
    return(

    <div className="tout1">
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>
        <div>

        </div>

        <div className="df">
            <div className="Cont-formProd">
              <FormProd/>
              <FormProd2/>
              <FormProd3/>
            </div>
           <div className="gt">
             <Tableau/> 
           </div>
        </div>
        
    </div>
    )
}export default Productions