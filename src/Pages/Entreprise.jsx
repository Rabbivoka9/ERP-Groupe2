import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Tentrep from "../Composants/Entreprise"


function Entreprise (){

       return (

              
              <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>

              <div>

                <Tentrep/>

              </div>
              
      
              
          </div>

       )
} export default Entreprise