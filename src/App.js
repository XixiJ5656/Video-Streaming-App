import React from "react";
import "./App.css";
import Navbar from "./navigation/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import HomePage from "./pages/HomePage";
import MovieSection from "./pages/MovieSection";
import TvshowSection from "./pages/TvshowSection";
import Showdetails from "./pages/Showdetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/movies" component={MovieSection} />
          <Route path="/tvshows" component={TvshowSection} />
          <Route path="/detailspage" component={Showdetails} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
