import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BeforeAuth from "./BeforeAuth";
import AfterAuth from "./AfterAuth";

const Navbar = (props) => {
  const Navlinks = props.auth.uid ? <AfterAuth /> : <BeforeAuth />;
  return (
    <nav className="navbar">
      <Link to={props.auth.uid ? "/homepage" : "/"} className="logo">
        LOGO
      </Link>
      {Navlinks}
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);