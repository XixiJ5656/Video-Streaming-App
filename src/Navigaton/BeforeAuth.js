import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const BeforeAuth = () => {
  return (
    <div className="authlinks">
      <NavLink to="/login">Log In</NavLink>

      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  );
};

export default BeforeAuth;
