import firebase from "../firebase/firebaseConfig";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

const LoginActionsCreator = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(() => {
        dispatch({
          type: LOGIN_ERROR,
        });
      });
  };
};

export default LoginActionsCreator;
