import React from "react";
import ContentRow from "../components/ContentRow";
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
        <ContentRow title="Action" apiUrl={moviesApi.action} />
        <ContentRow title="Comedy" apiUrl={moviesApi.comedy} />
        <ContentRow title="Fantasy" apiUrl={moviesApi.fantasy} />
        <ContentRow title="Crime" apiUrl={moviesApi.crime} />
        <ContentRow title="Adventure" apiUrl={moviesApi.adventure} />
        <ContentRow title="Animation" apiUrl={moviesApi.animation} />
        <ContentRow title="History" apiUrl={moviesApi.history} />
        <ContentRow title="Science Fiction" apiUrl={moviesApi.sifi} />
        <ContentRow title="Documentaries" apiUrl={moviesApi.documentary} />
        <ContentRow title="Family" apiUrl={moviesApi.family} />
        <ContentRow title="Drama" apiUrl={moviesApi.drama} />
        <ContentRow title="Romance" apiUrl={moviesApi.romance} />
        <ContentRow title="TV Movie" apiUrl={moviesApi.tvMovie} />
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
