import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./reducers/rootReducers";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./firebase/firebaseConfig";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
