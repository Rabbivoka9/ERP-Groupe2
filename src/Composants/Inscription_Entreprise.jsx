import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactModal from "react-modal";
import {
  TextField,
 
} from "@mui/material";

function Ajout_EM() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = (data) => {
    axios
      .post("http://172.20.10.3:5000/AjoutEM", data)
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
    <div className="fd">
      <div className="cont-log6">
        <div className="menu-AjoutEM ">
          <div className="titre-connexion">
            <h5>Nouvelle Entreprise Minière</h5>
          </div>
          <div className="Email1">
            <div className="outlined-basic">
              <TextField
                {...register("nom", { required: true })}
                label="Nom"
                name="nom"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "Le nom est requis" : ""}
                className="input"
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
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "La Description est requise" : ""}
                className="input"
                inputProps={{
                  style: { borderBottom: "0px  #000" },
                }}
              />
            </div>
            <div className="outlined-basic">
              <TextField
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "L'adresse e-mail n'est pas valide",
                  },
                })}
                label="Email"
                name="email"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "L'email est requis" : ""}
                className="input"
                inputProps={{
                  style: { borderBottom: "0px  #000" },
                }}
              />
            </div>
            <button className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              Ajouter
            </button>
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
  );
}

export default Ajout_EM;
