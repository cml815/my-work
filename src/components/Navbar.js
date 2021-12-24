import React from 'react';
import {  Link } from "react-router-dom";
import navStyles from "./navbar.module.css"

const Navbar = () => {
  return (
    <ul className="menu">
       <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
    </ul>
  );
}

export default Navbar
