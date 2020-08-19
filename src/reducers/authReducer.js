import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/LoginActions";
import { LOGOUT_SUCCESS, LOGOUT_ERROR } from "../actions/LogoutActions";
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/SignupActions";

const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, authError: null };
    case SIGNUP_ERROR:
      return { ...state, authError: "signup failed" };
    case LOGIN_SUCCESS:
      return { ...state, authError: null };
    case LOGIN_ERROR:
      return { ...state, loginError: "login failed" };
    case LOGOUT_SUCCESS:
      return { ...state, authError: null };
    case LOGOUT_ERROR:
      return { ...state, logoutError: "logout failed" };
    default:
      return state;
  }
};

export default authReducer;
