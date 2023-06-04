import { Table } from "react-materialize"


function Tcomande (){
    return (


        <div className="Cont-tableau">

                <div className="cont-plan">
                    <div className="cont-p"><h4 className="Plan-name">Commandes</h4></div>
                    
                </div>
                <div>
                     <Table className="tab-titre">
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
            {/* <button className="btn-plus"><img className="icon-plus" src="plus.png" alt="" /></button> */}
        </div>
       

    )
}export default Tcomande