
import { NavLink } from "react-router-dom"


function FormCota1(){
    return(
        <div className="FormDelais-Cota">
            <h4 className="Nom-client">Kibali Gold</h4>
            <div>
                <h4 className="Nom-Produit">Equiments pour Agens de Terrain</h4>
            </div>
            <hr className="ligne-cotation" />
            <div>
                <div>
                    <img className="" src="time.png" alt="" />
                    <p>samedi 10 juin 2023</p>
                </div>
                <a href="/DetailsCot">Voir plus</a>
            </div>
        </div>
    )
}export default FormCota1