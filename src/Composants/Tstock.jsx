import { Table } from "react-materialize"


function Tstock (){
    return (

        <div>

            <button className="btn-plus1">Ajouter un Article </button> 
 

        <div className="Cont-tableau5">

         

                <div className="cont-plan5">
                    <div className="cont-p5"><h4 className="Plan-name">Gestion des Stocks</h4></div>
                    
                </div>
                <div>
                     <Table className="tab-titre5">
                            <thead >
                                <tr>
                                <th data-field="id">
                                    Clients
                                </th>
                                <th data-field="name">
                                    Designation
                                </th>
                                <th data-field="price">
                                    Date
                                </th>
                                <th data-field="price">
                                    Etat
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
             
        </div>

    </div>
       

    )
}export default Tstock