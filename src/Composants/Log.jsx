import { useState } from "react";

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/connexion", data)
      .then((response) => {
        const { role } = response.data;
        if (role === "Vendeur") {
            window.location.href = "/Dasbord"
    
        } else {
        }
        console.log(response.data.role);
      })
      .catch((error) => {
        // Gestion des erreurs
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          setErrorMessage(error.response.data.error);
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div className="Fond-login">
      <div className="cont-log">
        <div className="menu-login">
          <div className="titre-connexion">
            <h5>Se Connecter</h5>
          </div>
          <div className="Email">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <TextField
              className="outlined-basic"
              {...register("username", { required: true })}
              label="Email"
              variant="outlined"
              error={errors.email ? true : false}
              helperText={errors.email ? "L'email est requis" : ""}
              inputProps={{
                style: { borderBottom: "0px solid #000" },
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
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <button className="btn-Conex" onClick={handleSubmit(onSubmit)}>
              Connexion
            </button>

            <div>
              <p>
                Vous n'avez pas de compte?{" "}
                <NavLink to="/Inscription" className="ab papi">
                  S'inscrire
                </NavLink>
              </p>
            </div>
          </div>
        </div>
        <div className="cont-bvlog">
          <img className="log-icon" src="erp.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;
