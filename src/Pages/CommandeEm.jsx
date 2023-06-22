
import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import Commande0K from "../Composants/CommandeOK"


function CommandeEm (){

       return(

       <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>

              <div>
                <Commande0K/>
              </div>
              
      
              
          </div>

       )
}export default CommandeEm