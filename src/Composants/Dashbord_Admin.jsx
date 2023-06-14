import Header_Admin from "./Navbar_Admin"
import Bar from "../Composants/BarRech"
import RectAmin from "./RectAdmin"
import RectAdmin2 from "./RectAmin2"
import RectAdmin3 from "./RectAmin3"
import FormUser1 from "./FormUser"
import FormUser2 from "./FormUser2"
import FormUser3 from "./FormUser3"


function Dashbord_admin(){
    return(
        <div className="tout1">
            <div className="bordu">
                <Header_Admin/>
                <Bar/>
            </div>
            <div className="gb">
                <div className="contToutrecta">
                    <RectAmin/>
                    <RectAdmin2/>
                    <RectAdmin3/>
                    <h3 className="titreFar">Utilisateurs Recents</h3>
                    <div className="ligneFar"></div>
                </div>
                <div className="FormCo">
                    <FormUser1/>
                    <FormUser2/>
                    <FormUser3/>
                </div>
            </div>
            
        </div>
    )
}export default Dashbord_admin