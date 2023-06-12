
import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import TcomE from "../Composants/ComandeEm"


function CommandeEm (){

       return(

       <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>

              <div>
                <TcomE/>
              </div>
              
      
              
          </div>

       )
}export default CommandeEm