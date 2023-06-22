
import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import StockTab from "../Composants/StockTab"


function Stocks(){
    return(
        <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>

        <StockTab/>
        

        
    </div>
    )
}export default Stocks