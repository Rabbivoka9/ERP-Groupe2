import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Header_entreprise from "./Navbar_Entreprise";
import Bar from "./BarRech";
import axios from "axios";
import ReactModal from "react-modal";
import {
  TextField,
 
} from "@mui/material";
import { DatePicker } from "react-materialize";


function DemandeDeCotation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedDate, setSelectedDate] = useState(null);  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/AjoutEM", data)
      .then((response) => {
        setApiResponse(response.data.message);
        setModalOpen(true);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setApiResponse(error.response.data.error);
          setModalOpen(true);
        } else {
          console.error(error);
        }
      });
  };
  const closeModal = () => {
    setModalOpen(false);

    if (apiResponse === "Compte crée avec succès") {
      window.location.href = "/Entreprise";
    }
  };
  return (

       <div className="tout1">
          <div className="bordu">
             <Header_entreprise/>
             <Bar/>

          </div>
    <div className="fd1">
      <div className="cont-log6">
        <div className="menu-AjoutEM12 ">
          <div className="titre-connexion16">
            <h5>Nouvelle Appel d'Offres</h5>
          </div>
          <div className="Email1">


          <div className="outlined-basic">
              <DatePicker
                {...register("email", {
                  required: true,
                 
                })}
             
                label="Date_Limite"
                className="input16"
                name="email"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
                
              />
            </div>

            <div className="outlined-basic">
              <TextField
      
                {...register("nom", { required: true })}
                label="Titre"
                name="nom"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "Le nom est requis" : ""}
                className="input14"
                inputProps={{
                  style: { borderBottom: "0px  #000" },
                }}
              />
            </div>

            <div className="outlined-basic">
              <TextField
                {...register("description", { required: true })}
                label="Description"
                name="description"
                multiline rows={6}
                fullWidth
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "La Description est requise" : ""}
                className="input14"
                inputProps={{
                  style: { borderBottom: "0px  #000" },
                }}
              />
            </div>

            <div className="cb">
              <button variant="contained" className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              Terminer
             </button> 
             <button variant="contained" className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              Suivant
             </button> 
            </div>
           
             
          </div>
        </div>
      </div>
      <ReactModal
        className="Mod"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="modal-content">
          <h2 className="titre-api">{JSON.stringify(apiResponse)}</h2>
          <button className="btn-ferme" onClick={closeModal}>
            Fermer
          </button>
        </div>
      </ReactModal>
    </div>
    </div>
  );
}

export default DemandeDeCotation;
