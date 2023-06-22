import { Visibility } from "@mui/icons-material"

function FormUser3(){
    return(
        <div className="FormDelais-Cota3">
            <h4 className="Nom-client">Sep_Congo</h4>
            <div className="dispo-nonProsuit">
                <div className="boule-vert"></div>
                <h4 className="Nom-Produit">Entreprise</h4>
            </div>
            <hr className="ligne-cotation1" />
            <div className="dispoGen-datHor-voir">
                <div className="dispo-hor-date">
                    <img className="icon-time" src="time.png" alt="" />
                    <p className="date">Lundi 20 Avril 2023</p>
                </div>
                <button className="btn-voirPlus"><Visibility/></button>
            </div>
        </div>
    )
}export default FormUser3