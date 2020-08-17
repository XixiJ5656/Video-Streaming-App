import firebase from "../firebase/firebaseConfig";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";


 const LogoutActionsCreator = () => {
    return (dispatch) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("log out SUCCESS");
          dispatch({ type: LOGOUT_SUCCESS });
        })
        .catch(() => {
          console.log("log out ERROR");
          dispatch({
            type: LOGOUT_ERROR,
          });
        });
    };
  };


  export default LogoutActionsCreator