import React from 'react';
import {  Link } from "react-router-dom";
import navStyles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className="menu">
       <li className="menu-item">
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item">
          <Link to="#">About</Link>
        </li>
    </nav>
  );
}

export default Navbar
