import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import BasicMenu from "./Btn";

function Tentrep() {
  const [entreprises, setEntreprises] = useState([]);

  useEffect(() => {
    const fetchEntreprises = async () => {
      try {
        const response = await axios.get("http://localhost:5000/GetEM");
        console.log(response.data);
        setEntreprises(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntreprises();
  }, []);

  return (
    <div className="Ent">
      <button className="btn-plus1">
        <NavLink className='tr' to="/Ajout_Em">Nouvelle Entreprise</NavLink>
      </button>
      <div className="Cont-tableau5">
        <div className="cont-plan5">
          <div className="cont-p5">
            <h4 className="Plan-name">Entreprises</h4>
          </div>
        </div>
        <div>
          <table className="ta-titre ">
            <tbody>
              <tr className="colums,tira">
                <th>N°</th>
                <th>Nom_Entreprise</th>
                <th>Date Ajout</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
              {entreprises.map((entreprise, i) => (
                <tr key={entreprise.id}>
                  <td>{i + 1}</td>
                  <td>{entreprise.nom}</td>
                  <td>{entreprise.createdAt}</td>
                  <td>{entreprise.email}</td>
                  <td>
                    <span>
                      <BasicMenu />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Tentrep;
