import { Table } from "react-materialize"


function TabClient (){
    return (


        <div className="Cont-tableau">

                <div className="cont-plan">
                    <div className="cont-p"><h4 className="Plan-name">Portefeuil Clients</h4></div>
                    
                </div>
                <div>
                     <Table className="tab-titre">
                            <thead >
                                <tr>
                                <th data-field="id">
                                    Nom
                                </th>
                                <th data-field="name">
                                    Localisation
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
}export default TabClient