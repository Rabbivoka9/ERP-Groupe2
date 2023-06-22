import Header_Admin from "../Composants/Navbar_Admin"
import Bar from "../Composants/BarRech"
import TabVend from "../Composants/Vendeur"



function Vendeur (){
       return (

             
              <div className="tout1">
            
              <div className="bordu">
                  <Header_Admin/>
                  <Bar/>
              </div>

              <div>
                <TabVend/>
              </div>
              
      
              
          </div>

       )
} export default Vendeur