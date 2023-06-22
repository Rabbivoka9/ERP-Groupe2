import { Visibility } from "@mui/icons-material"

function FormUser2(){
    return(
        <div className="FormDelais-Cota1">
            <h4 className="Nom-client">Rwashi Mining</h4>
            <div className="dispo-nonProsuit">
                <div className="boule-vert"></div>
                <h4 className="Nom-Produit">Entreprise</h4>
            </div>
            <hr className="ligne-cotation1" />
            <div className="dispoGen-datHor-voir">
                <div className="dispo-hor-date">
                    <img className="icon-time" src="time.png" alt="" />
                    <p className="date">Lundi 14 Decembre 2023</p>
                </div>
                <button className="btn-voirPlus"> <Visibility/> </button>
            </div>
        </div>
    )
}export default FormUser2