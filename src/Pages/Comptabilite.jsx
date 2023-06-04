import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import TabCompt from "../Composants/Tcompt"


function Comptabilite(){
    return(
        <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>
        <TabCompt/>
        

        
    </div>
    )
}export default Comptabilite