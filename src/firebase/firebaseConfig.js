import firebase from "./node_modules/firebase/app";
import "./node_modules/firebase/firestore";
import "./node_modules/firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA570TQtcyqo1XqqCxP-A95HCfsyDW4KZY",
  authDomain: "video-streaming-app-9103c.firebaseapp.com",
  databaseURL: "https://video-streaming-app-9103c.firebaseio.com",
  projectId: "video-streaming-app-9103c",
  storageBucket: "video-streaming-app-9103c.appspot.com",
  messagingSenderId: "501583689324",
  appId: "1:501583689324:web:2de6bb049751ec74540a49",
  measurementId: "G-BHM4H6HZK4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore();
export default firebase;
