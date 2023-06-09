import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import axios from "axios";
import ReactModal from "react-modal";

function Inscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/inscription", data)
      .then((response) => {
        setApiResponse(response.data.message);
        setModalOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="Fond-login1">
      <div className="cont-log">
        <div className="menu-login1">
          <div className="titre-connexion">
            <h5>Inscription</h5>
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
                {...register("email", { required: true })}
                label="Email"
                name="email"
                variant="outlined"
                error={errors.email ? true : false}
                helperText={errors.email ? "L'email est requis" : ""}
                className="input"
                inputProps={{
                  style: { borderBottom: "0px #000" },
                }}
              />
            </div>

            <button className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              S'inscrire
            </button>
            <div>
              <p>
                Vous avez un compte?{" "}
                <NavLink to="/" className="ab papi">
                  Se connecter
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <h4>{JSON.stringify(apiResponse)}</h4>
        <button onClick={() => setModalOpen(false)}>Fermer</button>
      </ReactModal>
    </div>
  );
}

export default Inscription;
