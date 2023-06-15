import React, { useState } from "react";
import { NavLink,useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactModal from "react-modal";
import { TextField } from "@mui/material";

function UserEM() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:5000/UserEM/${id}`, data)
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

    if (
      apiResponse ===
      "Compte crée avec succès"
    ) {
      window.location.href = "/";
    }
  };

  return (
    <div className="Fond-login1">
      <div className="cont-log">
        <div className="menu-login1">
          <div className="titre-connexion">
            <h5>Creation Compte Utilisateur</h5>
          </div>
          <div className="Email1">
           
              <div className="outlined-basic">
                <TextField
                  {...register("username", { required: true })}
                  label="username"
                  name="username"
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
                  {...register("telephone", { required: true })}
                  label="telephone"
                  name="telephone"
                  variant="outlined"
                  error={errors.email ? true : false}
                  helperText={errors.email ? "Le nom est requis" : ""}
                  className="input"
                  inputProps={{
                    style: { borderBottom: "0px  #000" },
                  }}
                />
              </div>
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
                helperText={errors.email ? "La Description est requise" : ""}
                className="input"
                inputProps={{
                  style: { borderBottom: "0px  #000" },
                }}
              />
            <TextField
              className="outlined-basic"
              {...register("pwd", { required: true })}
              label="Mot de passe"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              error={errors.password ? true : false}
              helperText={errors.password ? "Le mot de passe est requis" : ""}
              InputProps={{
                style: { borderBottom: "0px solid #ffff" },
              }}
            />
            <TextField
              className="outlined-basic"
              {...register("pwdConfirm", { required: true })}
              label="Confirmation mot de passe"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              error={errors.password ? true : false}
              helperText={errors.password ? "Le mot de passe est requis" : ""}
              InputProps={{
                style: { borderBottom: "0px solid #ffff" },
              }}
            />
            <button className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              Creer
            </button>
          </div>
        </div>
      </div>
      <ReactModal
        className="Mod"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h2 className="titre-api">{JSON.stringify(apiResponse)}</h2>
        <button className="btn-ferme" onClick={closeModal}>
          Fermer
        </button>
      </ReactModal>
    </div>
  );
}

export default UserEM;
