import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Tcomande from "../Composants/TableauCom"


function Commandes(){
    return(
        <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>
        <div className="gcoman">
             <Tcomande/>
        </div>
       

        

        
    </div>
    )
}export default Commandes