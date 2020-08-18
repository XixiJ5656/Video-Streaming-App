import React from "react";
import Row from "../components/Row";
import "./HomePage.css";
import { connect } from "react-redux";
import TopBanner from "../components/TopBanner";
import { tvShowsApi } from "../Apilists";
import { Redirect } from "react-router-dom";

const TvshowSection = (props) => {
  if (!props.auth.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="content-display">
        <TopBanner />

        <Row title="Drama" apiUrl={tvShowsApi.drama} />
        <Row title="Documentary" apiUrl={tvShowsApi.documentary} />
        <Row title="Mystery" apiUrl={tvShowsApi.mystery} />
        <Row title="News" apiUrl={tvShowsApi.news} />
        <Row title="Reality" apiUrl={tvShowsApi.reality} />
        <Row title="Talk" apiUrl={tvShowsApi.talk} />
        {/* <Row title="Animation" apiUrl={tvShowsApi.animation} /> */}
        <Row title="Comedy" apiUrl={tvShowsApi.comedy} />
        <Row title="Crime" apiUrl={tvShowsApi.crime} />
        <Row title="Action" apiUrl={tvShowsApi.action} />
        <Row title="Family" apiUrl={tvShowsApi.family} />
        <Row title="Kids" apiUrl={tvShowsApi.kids} />

        <Row title="Fantasy" apiUrl={tvShowsApi.fantasy} />
        <Row title="Soap" apiUrl={tvShowsApi.soap} />
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

export default connect(mapStateToProps)(TvshowSection);
