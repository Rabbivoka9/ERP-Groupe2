import React from "react";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import '../App.css';

function Header_Admin() {
  return (
    <div>
      <Navbar
        className="nav_Admin  no-autoinit"
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
          <div className="btn31 isActive">
            <div className="vc">
              <img className="icon23" src="tb.png" alt="" />
            </div>
            <div className="btn37">
              <NavLink to="/Dashbord_Admin" className=" papi1">
                Tableau de Bord
              </NavLink>
            </div>
          </div>
          
          <div className="btn37 isActive">
            <img className="icon23" src="Entr.png" alt="" />
            <NavLink to="/Entreprise" className=" papi">
              Entreprises
            </NavLink>
          </div>
          <div className="btn37 isActive">
            <img className="icon23" src="Vend.png" alt="" />
            <NavLink to="/Articles" className=" papi">
              Articles
            </NavLink>
          </div>
          <div className="btn37 isActive">
            <img className="icon23" src="CliV.png" alt="" />
            <NavLink to="/Vendeur" className=" papi">
              Vendeurs
            </NavLink>
          </div>
          <div className="btn34 ">
            <img className="icon23" src="para.png" alt="" />
            <NavLink to="/Conf_Admin" className=" papi">
              Paramétres
            </NavLink>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header_Admin;