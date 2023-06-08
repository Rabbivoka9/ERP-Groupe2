import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import TCotation from "../Composants/Dcotation"

function Dcotation(){
       return(
         
              <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>
              <div>

                <TCotation/>

              </div>
              
      
              
          </div>
       )
}export default Dcotation