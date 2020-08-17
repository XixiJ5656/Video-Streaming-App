import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LogoutActionsCreator from "../actions/LogoutActions";

const AfterAuth = (props) => {
  console.log(props);
  return (
    <div className="authlinks">
      <NavLink to="/accountpage">ICON</NavLink>

      <NavLink to="/" onClick={props.logout}>
        Log Out
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
