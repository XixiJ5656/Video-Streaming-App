import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const BeforeAuth = () => {
  return (
    <div className="navbar-links">
      <NavLink className="authlinks" to="/login">
        Log In
      </NavLink>

      <NavLink className="authlinks" to="/signup">
        Sign Up
      </NavLink>
    </div>
  );
};

export default BeforeAuth;
