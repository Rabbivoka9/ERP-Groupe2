import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import TabVend from "../Composants/Vendeur"



function Vendeur (){
       return (

             
              <div className="tout1">
            
              <div className="bordu">
                  <Header/>
                  <Bar/>
              </div>

              <div>
                <TabVend/>
              </div>
              
      
              
          </div>

       )
} export default Vendeur