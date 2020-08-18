import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SignupForm.css";
import SignupActionsCreator from "../actions/SignupActions";

const SignupForm = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordTwo: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    props.signup(email, password);
  };

  const isInvalid =
    state.password !== state.passwordTwo ||
    state.password === "" ||
    state.email === "" ||
    state.username === "";

  if (props.auth.uid) {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <div>
        <div className="background-picture-singup"></div>
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h5>SIGN UP</h5>
            <div className="form-group">
              <input
                className="form-control "
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control "
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
            <div className="form-group">
              <input
                className="form-control "
                type="password"
                name="passwordTwo"
                autoComplete="on"
                placeholder="Comfirm Password"
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
                Sign Up
              </button>
              {/* <div>
              {props.authError ? (
                <p>
                  Sign up failed, please double check your imput before submit.
                </p>
              ) : null}
            </div> */}
            </div>
          </form>
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
    signup: (email, password) =>
      dispatch(SignupActionsCreator(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
