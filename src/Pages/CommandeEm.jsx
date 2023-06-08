
import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import TcomE from "../Composants/ComandeEm"


function CommandeEm (){

       return(

       <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>

              <div>
                <TcomE/>
              </div>
              
      
              
          </div>

       )
}export default CommandeEm