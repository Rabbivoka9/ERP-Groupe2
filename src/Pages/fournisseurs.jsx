import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import Fourni from "../Composants/Fourni"

function Fournisseurs(){

       return(
              
              <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>
              <div>

                <Fourni/>
                
              </div>
              
      
              
          </div>
       )
} export default Fournisseurs