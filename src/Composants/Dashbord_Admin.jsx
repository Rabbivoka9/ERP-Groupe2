import React, { useState, useEffect } from "react";
import axios from "axios";
import Header_Admin from "./Navbar_Admin";
import Bar from "../Composants/BarRech";
import RectAmin from "./RectAdmin";
import RectAdmin2 from "./RectAmin2";
import RectAdmin3 from "./RectAmin3";
import FormUser from "./FormUser";

function Dashbord_admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Appel à l'API pour récupérer les utilisateurs
    axios.get("http://localhost:5000/UserAttente")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div className="tout1">
      <div className="bordu">
        <Header_Admin />
        <Bar />
      </div>
      <div className="gb">
        <div className="contToutrecta">
          <RectAmin />
          <RectAdmin2 />
          <RectAdmin3 />
          <h3 className="titreFar">Utilisateurs Récents</h3>
          <div className="ligneFar"></div>
        </div>
        <div className="FormCo">
          {users.map(user => (
            <FormUser key={user.id} etat={user.etat} nom={user.username} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashbord_admin;
