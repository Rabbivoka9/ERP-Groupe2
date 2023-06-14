import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import BasicMenu from "./Btn";


function Tentrep() {
  const [entreprises, setEntreprises] = useState([]);

  const fetchEntreprises = async () => {
    try {
      const response = await axios.get("http://192.168.43.191:5000/GetEM");
  
      setEntreprises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEntreprises();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://192.168.43.191:5000/GetEMId/${id}`);
      const entreprise = response.data;
  
      window.location.href = `/Edit_EntepriseEM/${id}`;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
  };

  const handleViewMore = (id) => {
  };

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
          <table className="ta-titre">
            <tbody>
              <tr className="colums, tira">
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
                      <button className="btnicon" onClick={() => handleEdit(entreprise.id)}>
                        <Edit />
                      </button>
                      <button className="btnicon" onClick={() => handleDelete(entreprise.id)}>
                        <Delete />
                      </button>
                      <button className="btnicon" onClick={() => handleViewMore(entreprise.id)}>
                        <Visibility />
                      </button>
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
