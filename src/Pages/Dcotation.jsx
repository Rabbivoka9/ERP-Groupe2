import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import Cotationtable from "../Composants/Cotationtable"

function Dcotation(){
       return(
         
              <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>
              <div>

                <Cotationtable/>

              </div>
              
      
              
          </div>
       )
}export default Dcotation