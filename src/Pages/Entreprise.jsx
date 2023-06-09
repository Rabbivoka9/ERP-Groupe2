import Header_Admin from "../Composants/Navbar_Admin"
import Bar from "../Composants/BarRech"
import Tentrep from "../Composants/Entreprise"


function Entreprise (){

       return (

              
              <div className="tout1">
            
              <div className="bordu">
                  <Header_Admin/>
                  <Bar/>
              </div>

              <div>

                <Tentrep/>

              </div>
              
      
              
          </div>

       )
} export default Entreprise