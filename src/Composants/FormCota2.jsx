import { Visibility } from "@mui/icons-material"



function FormCot2(){
    return(
        <div className="FormDelais-Cota14">
            <h4 className="Nom-client">Mamita VOKA</h4>
            <div className="dispo-nonProsuit">
                <div className="boule-vert"></div>
                <h4 className="Nom-Produit">Cotation Decoration</h4>
            </div>
            <hr className="ligne-cotation1" />
            <div className="dispoGen-datHor-voir">
                <div className="dispo-hor-date">
                    <img className="icon-time" src="time.png" alt="" />
                    <p className="date">Mercredi 23 Mai 2023</p>
                </div>
                <button className="btn-voirPlus"> <Visibility/> </button>
            </div>
        </div>
    )
}export default FormCot2