import React from "react";
import { Navbar, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";
import '../App.css';



function Header() {
    return (<div  >

        <Navbar className="nav"

            alignLinks="right"
            brand={<a className="brand-logo" href="#"><div className="tk">
                <img className="logo" src="erp.png" alt="" /> 
            <div className="ligne"></div></div></a>}
         
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
                    <img className="icon23" src="tb.png" alt="" />
                      <NavLink to="/Dasbord" className="ab papi">Tableau de Bord</NavLink>
                </div>
              
                <div className="btn31">
                    <img className="icon23" src="gest.png" alt="" />
                    <NavLink to="/Stock" className="ab papi">Stocks</NavLink>
                </div>
                
                <div className="btn31">
                    <img className="icon23" src="prod.png" alt="" />
                    <NavLink to="/Production" className="ab papi">Productions</NavLink>
                </div>
                
                <div className="btn31">
                    <img className="icon23" src="compt.png" alt="" />
                    <NavLink to="/Comptabilite" className="ab papi">Comptabilite</NavLink>
                </div>
                
                <div className="btn32">
                    <img className="icon23" src="coma.png" alt="" />
                    <NavLink to="/Commandes" className="ab papi">Commandes</NavLink>
                </div>
                
                <div className="btn33">
                    <img className="icon23" src="portf.png" alt="" />
                     <NavLink to="/Portefeuil" className="ab papi">Portefeuil Clients</NavLink>
                </div>
               
                 <div className="btn34">
                    <img className="icon23" src="para.png" alt="" />
                    <NavLink to="/Conf" className="ab papi">Paramétres</NavLink>
                </div> 
                
            </div>


        </Navbar>

    </div>

    )
} export default Header