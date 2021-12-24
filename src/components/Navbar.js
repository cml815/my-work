import React from 'react';
import {  Link } from "react-router-dom";
import navStyles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={navStyles.menu}>
       <li className={navStyles.menuItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={navStyles.menuItem}>
          <Link to="#">About</Link>
        </li>
    </ul>
  );
}

export default Navbar
