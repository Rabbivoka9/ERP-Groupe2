import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RectVend1() {
  const [numVendeurs, setNumVendeurs] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/CountRole`)
      .then(response => {
        const count = response.data.vendeurCount;
        setNumVendeurs(count);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du nombre de vendeurs :', error);
      });
  }, []);

  return (
    <div className="cont-recta">
      <div className="block-cota">
        <div className="contIcon-cotation">
          <img className="icon-cotation" src="CliV.png" alt="" />
        </div>
        <h3 className="titre-Cotation12">Vendeur</h3>
      </div>
      <h2 className="Nbre-Cotation">{numVendeurs}</h2>
      <hr className="ligne-cotation" />
    </div>
  );
}

export default RectVend1;
