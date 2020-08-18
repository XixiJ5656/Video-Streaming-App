import React, { useState } from "react";
import "./LoginForm.css";
import { connect } from "react-redux";
import LoginActionsCreator from "../actions/LoginActions";
import { Redirect, Link } from "react-router-dom";

const LoginForm = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    props.login(email, password);
  };

  const isInvalid = state.password === "" || state.email === "";

  if (props.auth.uid) {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <div>
        <div className="background-picture-login"></div>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h5>LOG IN </h5>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control "
                type="password"
                name="password"
                autoComplete="on"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <br />
            <div>
              <button
                disabled={isInvalid}
                type="submit"
                className={isInvalid ? "btn btn-secondary" : "btn btn-primary"}
              >
                Log in
              </button>
            </div>
            <br />
            <p>Don't have an account? </p>
            <Link to="/signup" className="authbtn">
              SIGN UP FREE
            </Link>
          </form>
          {/* <div>
          {props.authError ? (
            <p>Log in failed, please double check your email and password</p>
          ) : null}
        </div> */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(LoginActionsCreator(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
