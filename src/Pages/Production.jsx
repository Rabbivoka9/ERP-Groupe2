import Header from "../Composants/Navbar"
import Bar from "../Composants/BarRech"
import FormProd from "../Composants/FormProd1"




function Productions(){
    return(
    <div className="tout1">
            
        <div className="bordu">
            <Header/>
            <Bar/>
        </div>

        <FormProd/>

        

        
    </div>
    )
}export default Productions