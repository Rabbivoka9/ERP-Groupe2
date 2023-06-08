
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
function Inscription(){

    const {
        register,
       
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

                      <div className='outlined-basic'>
                          <TextField 
                            {...register('fullName', { required: true })}
                            label="Nom"
                            variant="outlined"                           
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'Le nom est requis' : ''}
                            className='input'
                            inputProps={{
                            style: { borderBottom: '0px  #000' } }}
                          />
                       </div>

                        <div className='outlined-basic'>
                          <TextField 
                            {...register('Description', { required: true })}
                            label="Description"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'La Description est requise' : ''}
                            className='input'
                            inputProps={{
                            style: { borderBottom: '0px  #000' } }}

                          />
                        </div>

               
                        <div className='outlined-basic'>
                          <TextField 
                            {...register('email', { required: true })}
                            label="Email"
                            variant="outlined"
                            error={errors.email ? true : false}
                            helperText={errors.email ? 'L\'email est requis' : ''}
                            className='input'
                            inputProps={{
                            style: { borderBottom: '0px #000' } }}
                          />
                        </div>
                      
                         <div className="outlined-basic">
                           <input
                             {...register('profilePhoto')}
                             type="file"
                             accept="image/*"
                             id="profilePhoto"
                             className='input'
                           />
                         </div>

                      
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