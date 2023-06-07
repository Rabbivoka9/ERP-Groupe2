
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
function Inscription(){

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
        <div className="Fond-login1">
            <div className="cont-log">
                <div className="menu-login1">
                    <div className="titre-connexion">
                        <h5>Inscription</h5>
                    </div>
                    <div className='Email1' >

                    <TextField className='outlined-basic'
                            label="Nom"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'L\'email est requis' : ''}
                              inputProps={{
                               style: { borderBottom: '0px solid #000' } }}

                        />

                    <TextField className='outlined-basic'
                            label="Description"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'L\'email est requis' : ''}
                              inputProps={{
                               style: { borderBottom: '0px solid #000' } }}

                        />

                        <TextField className='outlined-basic'
                            {...register('email', { required: true })}
                            label="Email"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'L\'email est requis' : ''}
                              inputProps={{
                               style: { borderBottom: '0px solid #000' } }}

                        />

                        


            <button className='btn-Conex'><NavLink to="/Login" className="ab papi">S'Inscrire</NavLink></button>


            <div>

                <p>Vous avais un compte?  <NavLink to="/" className="ab papi">Se connecter</NavLink></p>
                
                
            </div>
                  
                   

                    </div>


                </div>
               
                
            </div>
        </div>
    )
}export default Inscription