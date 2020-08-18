import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/LoginActions";
import { LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/LogoutActions";
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/SignupActions";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      console.log("signup success");
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      console.log("signup error");
      return { ...state, authError: "signup failed" };
    case LOGIN_SUCCESS:
      console.log("login success");
      return { ...state, authError: null };
    case LOGIN_ERROR:
      console.log("login error");
      return { ...state, loginError: "login failed" };
    case LOGOUT_SUCCESS:
      console.log("logout success");
      return { ...state, authError: null };
    case LOGOUT_ERROR:
      console.log("logout error");
      return { ...state, logoutError: "logout failed" };
    default:
      return state;
  }
};

export default authReducer;
