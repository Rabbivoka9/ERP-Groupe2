
import { Table } from "react-materialize"
import { Icon } from "@iconify/react";
import BasicMenu from "./Btn";



function Tarticle(){
    return (

        <div>

            <button className="btn-plus1">Ajouter un Article </button> 
 

        <div className="Cont-tableau5">

                <div className="cont-plan5">
                    <div className="cont-p5"><h4 className="Plan-name">Liste des Articles</h4></div>
                    
                </div>
                <div>
                <table className="ta-titre ">
          <tbody>
           
               <tr className="colums,tira" >
                  <th>Designation</th>
                  <th>Quantite</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr> 
           
                     
             <tr className="trd">
              <td>Farine 25kg</td>
              <td> 700</td>
              <td>Disponible</td>
              <td>
                <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>
            <tr>
              <td>
              </td>
             
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>            <tr>
              <td>
                
              </td>
              <td></td>
              <td className="gender"></td>
              <td>
              <span>
                    <BasicMenu/>
                </span>
              </td>
            </tr>            <tr>
              
              
            </tr>
          </tbody>
        </table>
            </div>
             
        </div>

    </div>
       

    )
}export default Tarticle