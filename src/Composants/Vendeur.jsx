

import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import BasicMenu from "./Btn";
import ReactModal from "react-modal";





function TabVend() {
  const [utilisateurs, setEntreprises] = useState([]);
  const [idEntreprise, setEntrepriseId] = useState();

  const [isModalOpen, setModalOpen] = useState(false);

  const fetchEntreprises = async () => {
    try {
      const response = await axios.get("http://localhost:5000/GetUser");
  
      setEntreprises(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const confirm=(id)=>{
    setEntrepriseId(id)
    setModalOpen(true);
  }

  useEffect(() => {
    fetchEntreprises();
  }, []);

  const handleEdit = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/GetEMId/${id}`);
      const entreprise = response.data;
  
      window.location.href = `/Edit_EntepriseEM/${id}`;
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.put(`http://localhost:5000/DeleteEM/${id}`);
      fetchEntreprises(); 
    } catch (error) {
      console.error(error);
    }
    setModalOpen(false);
  };

  const handleViewMore = (id) => {
  };
  const closeModal = () => {
    setModalOpen(false);

    
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
                <th>UserName</th>
                <th>Role</th>
                <th>Etat</th>
                <th>Action</th>
              </tr>
              {utilisateurs.map((user, i) => (
                <tr key={user.id}>
                  <td>{i + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>{user.etat}</td>
                  <td>
                    <span>
                      <button className="btnicon" onClick={() => handleEdit(user.id)}>
                        <Edit />
                      </button>
                      <button className="btnicon" onClick={() => confirm(user.id)}>
                        <Delete />
                      </button>
                      
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ReactModal
        className="Mod"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="modal-content">
        <h2 className="titre-api">Voulez-vous vraiment supprimer cet Entreprise ?</h2>

          <div className="btn-tous">
            <button className="btn-ferme1" onClick={() => handleDelete(idEntreprise)}>
              OUI
            </button>
            <button className="btn-ferme" onClick={closeModal}>
              NON
            </button>
          </div>
          
        </div>
      </ReactModal>
    </div>
    
  );
}
export default TabVend