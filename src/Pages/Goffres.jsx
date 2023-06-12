import Header_entreprise from "../Composants/Navbar_Entreprise"
import Bar from "../Composants/BarRech"
import Toffres from "../Composants/Goffres"

function Goffres (){
       return(
            
              <div className="tout1">
            
              <div className="bordu">
                  <Header_entreprise/>
                  <Bar/>
              </div>

              <div>

                <Toffres/>

              </div>
              
      
              
          </div>
       )
}export default Goffres