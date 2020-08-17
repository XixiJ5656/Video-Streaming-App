import React, { useState } from "react";
import { connect } from "react-redux";
import LoginActionsCreator from "../actions/LoginActions";
import { Redirect, Link } from "react-router-dom";

const LoginPage = (props) => {
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

  if (props.auth.uid) {
    return <Redirect to="/homepage" />;
  } else {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <h5>Log In Here</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="on"
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Log in</button>
          </div>
          <div>
            {props.loginError ? (
              <p>Log in failed, please double check your email and password</p>
            ) : null}
          </div>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(LoginActionsCreator(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
