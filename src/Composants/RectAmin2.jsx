import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RectAdmin2 (){
    const [numEM, setNumVendeurs] = useState(0);

    useEffect(() => {
      axios.get(`http://localhost:5000/CountRole`)
        .then(response => {
          const count = response.data.entrepriseMiniereCount;
          setNumVendeurs(count);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du nombre de vendeurs :', error);
        });
    }, []);
       return(
           <div className="cont-recta1">
               <div className="block-cota">
                    <div className="contIcon-cotation1" ><img className="icon-cotation" src="Entr.png" alt="" /></div>
                    <h3 className="titre-Cotation1">Entreprises</h3>
               </div>
               <h2 className="Nbre-Cotation">{numEM}</h2>
               <hr className="ligne-cotation" />
           </div>
       )
   }export default RectAdmin2