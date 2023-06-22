import React from "react";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import '../App.css';

function Header_entreprise() {
  return (
    <div>
      <Navbar
        className="nav_Vendeur no-autoinit "
        alignLinks="right"
        brand={
          <a className="brand-logo" href="/">
            <div className="tk">
              <img className="logo" src="erp.png" alt="" />
              <div className="ligne"></div>
            </div>
          </a>
        }
        centerChildren
        id="mobile-nav"
        menuIcon={<Icon className="mm">menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <div className="btn23">
          <div className="btn31">
            <div className="vc">
              <img className="icon23" src="tb.png" alt="" />
            </div>
            <div className="vw">
              <NavLink to="/Dashbord_Entreprise" className=" papi2">
                Tableau de Bord
              </NavLink>
            </div>
          </div>
         
         
         
          <div className="btn37">
            <img className="icon23" src="edi.png" alt="" />
            <NavLink to="/Dcotation" className=" papi">
              Cotation
            </NavLink>
          </div>
          <div className="btn37">
            <img className="icon23" src="gestion.png" alt="" />
            <NavLink to="/Goffres" className=" papi">
              Gestion d'Offres
            </NavLink>
          </div>
          <div className="btn37">
            <img className="icon23" src="fou.png" alt="" />
            <NavLink to="/fournisseurs" className=" papi">
              Fournisseurs
            </NavLink>
          </div>
          <div className="btn37">
            <img className="icon23" src="commande.png" alt="" />
            <NavLink to="/CommandeEm" className=" papi">
              Commandes
            </NavLink>
          </div>
         
          <div className="btn34">
            <img className="icon23" src="para.png" alt="" />
            <NavLink to="/Conf" className=" papi">
              Paramétres
            </NavLink>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header_entreprise;
