import React from 'react';
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
    <ul className="menu">
       <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
    </ul>
    </div>
  );
}

export default Navbar
