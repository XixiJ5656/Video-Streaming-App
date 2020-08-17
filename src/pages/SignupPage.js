import React, { useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import SignupActionsCreator from "../actions/SignupActions";

const SignupPage = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    props.signup(email, password);
  };

  // if (props.signupError) {
  //   return <Redirect to="/singup" />;
  // } else {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>Sign Up Here</h5>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            autoComplete="on"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
};
// };

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password) =>
      dispatch(SignupActionsCreator(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
