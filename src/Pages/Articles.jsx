import Header_Admin from "../Composants/Navbar_Admin"
import Bar from "../Composants/BarRech"
import Tarticle from "../Composants/Article"


function Articles (){

       return (
              
              <div className="tout1">
            
              <div className="bordu">
                  <Header_Admin/>
                  <Bar/>
              </div>

              <div>
                <Tarticle/>
              </div>
              
      
              
          </div>

       )
} export default Articles