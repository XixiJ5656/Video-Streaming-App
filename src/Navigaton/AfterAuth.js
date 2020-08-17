import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LogoutActionsCreator from "../actions/LogoutActions";

const AfterAuth = (props) => {
  console.log(props);
  return (
    <div className="navbar-links">
      <NavLink to="/accountpage" className="authlinks">
        ICON
      </NavLink>

      <NavLink to="/" onClick={props.logout} className="authlinks">
        LOG OUT
      </NavLink>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(LogoutActionsCreator()),
  };
};

export default connect(null, mapDispatchToProps)(AfterAuth);
