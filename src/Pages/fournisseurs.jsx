import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import Tabfour from "../Composants/Four"

function Fournisseurs(){

       return(
              
              <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>
              <div>

                <Tabfour/>
                
              </div>
              
      
              
          </div>
       )
} export default Fournisseurs