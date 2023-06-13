import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactModal from "react-modal";
import { TextField } from "@mui/material";

function Edit_EntrepriseEM() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setModalOpen] = useState(false);
  const [load, setLoad] = useState(true);
  const [apiResponse, setApiResponse] = useState("");
  const [entrepriseNom, setEntrepriseDataNom] = useState("");
  const [entrepriseDescription, setEntrepriseDataDescription] = useState("");
  const [entrepriseEmail, setEntrepriseEmail] = useState("");

  useEffect(() => {
    const fetchEntrepriseData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/GetEMId/${id}`);
        const entreprise = response.data;

        setEntrepriseDataNom(entreprise.nom);
        setEntrepriseDataDescription(entreprise.description);
        setEntrepriseEmail(entreprise.email);
        setLoad(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEntrepriseData();
  }, [id]);

  const onSubmit = (data) => {
    axios
      .put(`http://localhost:5000/EditEM/${id}`, data)
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

    if (apiResponse === "Entreprise modifier avec succès") {
      window.location.href = "/Entreprise";
    }
  };
  return (
    !load && (
      <div>
        <div className="cont-log6">
          <div className="menu-AjoutEM ">
            <div className="titre-connexion">
              <h5>Modification Entreprise Minière</h5>
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
                  defaultValue={entrepriseNom}
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
                  defaultValue={entrepriseDescription}
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
                  defaultValue={entrepriseEmail}
                  error={errors.email ? true : false}
                  helperText={errors.email ? "L'email est requis" : ""}
                  className="input"
                  inputProps={{
                    style: { borderBottom: "0px  #000" },
                  }}
                />
              </div>
              <button className="btn-Conex" onClick={handleSubmit(onSubmit)}>
                Modifier
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
    )
  );
}

export default Edit_EntrepriseEM;
