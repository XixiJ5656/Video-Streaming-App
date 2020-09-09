import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LogoutActionsCreator from "../actions/LogoutActions";

const AfterAuth = (props) => {
  return (
    <div className="navbar-links">
      <div className="content-nav">
        <NavLink to="/homepage" className="content-links">
          Home
        </NavLink>
        <NavLink to="/movies" className="content-links">
          Movies
        </NavLink>
        <NavLink to="/tvshows" className="content-links">
          TV Shows
        </NavLink>
      </div>
      <div className="auth-nav">
        <NavLink to="/accountpage" className="after-authlink-user">
          XJ
        </NavLink>
        <NavLink to="/" onClick={props.logout} className="after-authlink">
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LogoutActionsCreator()),
  };
};

export default connect(null, mapDispatchToProps)(AfterAuth);
