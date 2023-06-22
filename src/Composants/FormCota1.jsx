import { Visibility } from "@mui/icons-material"



function FormCot1(){
    return(
        <div className="FormDelais-Cota13">
            <h4 className="Nom-client">NDN_Pro</h4>
            <div className="dispo-nonProsuit">
                <div className="boule-vert"></div>
                <h4 className="Nom-Produit">Cotation Installation Electrique </h4>
            </div>
            <hr className="ligne-cotation1" />
            <div className="dispoGen-datHor-voir">
                <div className="dispo-hor-date">
                    <img className="icon-time" src="time.png" alt="" />
                    <p className="date">Jeudi 05 Mars 2023</p>
                </div>
                <button className="btn-voirPlus"> <Visibility/> </button>
            </div>
        </div>
    )
}export default FormCot1