
import { Table } from "react-materialize"


function Tableau (){
    return (


        <div className="Cont-tableau3">

                <div className="cont-plan">
                    <div className="cont-p"><h4 className="Plan-name">Plan de Production</h4></div>
                    
                </div>
                <div>
                     <Table className="tab-titre">
                            <thead >
                                <tr>
                                <th data-field="id">
                                    Designation
                                </th>
                                <th data-field="name">
                                    Quantite
                                </th>
                                <th data-field="price">
                                    Element
                                </th>
                                <th data-field="price">
                                    Date
                                </th>
                                <th data-field="price">
                                    Action
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                
                                </td>
                                </tr>
                                <tr>
                                <td>
                                
                                </td>
                                <td>
                                
                                </td>
                                <td>
                                </td>
                                </tr>
                                <tr>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                
                                </td>
                                </tr>
                            </tbody>
                </Table>
            </div>
            <button className="btn-plus"><img className="icon-plus" src="plus.png" alt="" /></button>
        </div>
       

    )
}export default Tableau