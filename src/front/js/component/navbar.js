import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.js";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="ml-auto d-flex gap-3">
          <Link style={{color: 'white'}} to="/register">
            <i class="far fa-address-card"> Registro</i>
          </Link>
          <Link style={{color: 'white'}} to="/login">
            <i class="fas fa-sign-in-alt"> Login</i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
