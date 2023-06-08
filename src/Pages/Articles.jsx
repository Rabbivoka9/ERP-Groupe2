import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Tarticle from "../Composants/Article"


function Articles (){

       return (
              
              <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>

              <div>
                <Tarticle/>
              </div>
              
      
              
          </div>

       )
} export default Articles