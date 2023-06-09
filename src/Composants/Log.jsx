import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField, IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Login (){
    const {
        register,
      
        formState: { errors },
       
        } = useForm();  
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

                        <TextField className='outlined-basic'
                            {...register('password', { required: true })}
                            label="Mot de passe"
                            type={showPassword ? 'text' : 'password'}
                            variant="outlined"
                            error={errors.password ? true : false}
                            helperText={errors.password ? 'Le mot de passe est requis' : ''}
                            inputProps={{
                             style: { borderBottom: '0px solid #000',textAlign: 'center'},
                             endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ) }}
                        /> 
                            

            <button className='btn-Conex'>Connexion</button>

            <div>
                <p>Vous n'avais pas de compte?<NavLink to="/Inscription" className="ab papi">S'inscrire</NavLink></p>
                
            </div>
                  
                   

                    </div>


                </div>
                <div className='cont-bvlog'> 
                    <img className="log-icon" src="erp.png" alt="" />
                </div>

                
            </div>

        </div>
    )
}export default Login