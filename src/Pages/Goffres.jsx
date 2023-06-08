import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Toffres from "../Composants/Goffres"

function Goffres (){
       return(
            
              <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>

              <div>

                <Toffres/>

              </div>
              
      
              
          </div>
       )
}export default Goffres