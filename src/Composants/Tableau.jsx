
import BasicMenu from "./Btn";


function Tableau (){
    return (


        <div className="Cont-tableau3">

                <div className="cont-plan">
                    <div className="cont-p"><h4 className="Plan-name">Plan de Production</h4></div>
                    
                </div>
                <div>
                <table className="ta-titre1 ">
          <tbody>
           
               <tr className="colums,tira" >
                  <th>Designation</th>
                  <th>Quantite</th>
                  <th>Etat</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr> 
           
                     
             <tr className="trd">

              <td>Farine 25kg</td>
              <td> 700</td>
              <td>Disponible</td>
              <td className="gender">
                10 juin 2023
              </td>
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
            <button className="btn-plus"><img className="icon-plus" src="plus.png" alt="" /></button>
        </div>
       

    )
}export default Tableau