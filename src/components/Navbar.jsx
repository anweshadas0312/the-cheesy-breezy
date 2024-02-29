import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/pizzaLogo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";



import {useState} from 'react'

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavbar = ()=>{
        setOpenLinks( ! openLinks)
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />
        <div className="hiddenLinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
      <div className="rightSide">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBarsStaggered} />
          
        </button>
      </div>
    </div>
  );
};

export default Navbar;
