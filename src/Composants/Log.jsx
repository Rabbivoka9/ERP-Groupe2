import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField, Button, IconButton, InputAdornment, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';





function Login (){
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        clearErrors
      } = useForm();  const onSubmit = (data) => {
        console.log(data);    // Réinitialiser le formulaire
        reset();
        clearErrors();
      }  
        const [showPassword, setShowPassword] = useState()  
        const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    return(
        <div className="Fond-login">
            <div className="cont-log">
                <div className="menu-login">
                    <div className="titre-connexion">
                        <h5>Se Connecter</h5>
                    </div>
                    <div className='Email' >
                        <TextField className='outlined-basic'
                            {...register('email', { required: true })}
                            label="Email"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'L\'email est requis' : ''}
                              inputProps={{
                               style: { borderBottom: '0px solid #000' } }}

                        />

                        <TextField
                        className='outlined-basic'
                        {...register('password', { required: true })}
                        label="Mot de passe"
                        type={showPassword ? 'text' : 'password'}
                        variant="outlined"
                        error={errors.password ? true : false}
                        helperText={errors.password ? 'Le mot de passe est requis' : ''}
                        InputProps={{
                            style: { borderBottom: '0px solid #ffff' },
                            endAdornment: (
                            <InputAdornment  position="end">
                               
                                <IconButton onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            )
                        }}
                        />


            <button className='btn-Conex'><NavLink to="/Dasbord" className="ab papi">Connexion</NavLink></button>


            <div>
                <p>Vous n'avais pas de compte?  <NavLink to="/Inscription" className="ab papi">S'Inscrire</NavLink></p>
                
            </div>
                  
                   

                    </div>


                </div>
                <div className='cont-bvlog'> 
                    <img className="log-icon" src="erp.png" alt="" />
                    <div className="cont-bienv">Bienvenue</div>
                </div>

                
            </div>

        </div>
    )
}export default Login