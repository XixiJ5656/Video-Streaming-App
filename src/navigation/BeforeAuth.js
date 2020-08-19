import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const BeforeAuth = () => {
  return (
    <div>
      <NavLink className="before-authlink" to="/login">
        Log In
      </NavLink>

      {/* <NavLink className="authlinks" to="/signup">
        Sign Up
      </NavLink> */}
    </div>
  );
};

export default BeforeAuth;
