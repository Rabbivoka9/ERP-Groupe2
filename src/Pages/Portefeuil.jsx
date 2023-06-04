import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import TabClient from "../Composants/Tclients"

function Portefeuil(){
    return(
        <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>
        <TabClient/>
        

        
    </div>
    )
}export default Portefeuil