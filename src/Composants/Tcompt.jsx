import { Table } from "react-materialize"


function TabCompt (){
    return (


        <div className="Cont-tableau">

                <div className="cont-plan">
                    <div className="cont-p"><h4 className="Plan-name">Transaction</h4></div>
                    
                </div>
                <div>
                     <Table className="tab-titre">
                            <thead >
                                <tr>
                                <th data-field="id">
                                    Date
                                </th>
                                <th data-field="name">
                                    Détails
                                </th>
                                <th data-field="price">
                                    Type
                                </th>
                                <th data-field="price">
                                    Montant
                                </th>
                                <th data-field="price">
                                    Tva
                                </th>

                                <th data-field="price">
                                    Solde
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
}export default TabCompt