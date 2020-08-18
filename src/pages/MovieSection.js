import React from "react";
import Row from "../components/Row";
import "./HomePage.css";
import { connect } from "react-redux";
import TopBanner from "../components/TopBanner";
import { moviesApi } from "../Apilists";
import { Redirect } from "react-router-dom";

const MovieSection = (props) => {
  if (!props.auth.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="content-display">
        <TopBanner />
        <Row title="Action" apiUrl={moviesApi.action} />
        <Row title="Comedy" apiUrl={moviesApi.comedy} />
        <Row title="Romance" apiUrl={moviesApi.romance} />
        <Row title="Fantasy" apiUrl={moviesApi.fantasy} />
        <Row title="Crime" apiUrl={moviesApi.crime} />
        <Row title="Adventure" apiUrl={moviesApi.adventure} />
        <Row title="Documentaries" apiUrl={moviesApi.documentary} />
        <Row title="Drama" apiUrl={moviesApi.drama} />
        <Row title="Animation" apiUrl={moviesApi.animation} />
        <Row title="Family" apiUrl={moviesApi.family} />
        <Row title="History" apiUrl={moviesApi.history} />
        <Row title="Science Fiction" apiUrl={moviesApi.sifi} />
        <Row title="TV Movie" apiUrl={moviesApi.tvMovie} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(MovieSection);
