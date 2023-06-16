import { Visibility } from "@mui/icons-material"



function FormUser1(props){
    return(
        <div className="FormDelais-Cota">
            <h4 className="Nom-client">{props.nom}</h4>
            <div className="dispo-nonProsuit">
                <div className="boule-vert"></div>
                <h4 className="Nom-Produit"> {props.etat} </h4>
            </div>
            <hr className="ligne-cotation1" />
            <div className="dispoGen-datHor-voir">
                <div className="dispo-hor-date">
                    <img className="icon-time" src="time.png" alt="" />
                    <p className="date">Vendredi 19 juin 2023</p>
                </div>
                <button className="btn-voirPlus"> <Visibility/> </button>
            </div>
        </div>
    )
}export default FormUser1