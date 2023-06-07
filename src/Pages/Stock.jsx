
import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import Tstock from "../Composants/Tstock"

function Stocks(){
    return(
        <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>

        <Tstock/>
        

        
    </div>
    )
}export default Stocks