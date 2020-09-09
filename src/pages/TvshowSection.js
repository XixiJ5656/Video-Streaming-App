import React from "react";
import ContentRow from "../components/ContentRow";
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
        <ContentRow title="Drama" apiUrl={tvShowsApi.drama} />
        <ContentRow title="Documentary" apiUrl={tvShowsApi.documentary} />
        <ContentRow title="Mystery" apiUrl={tvShowsApi.mystery} />
        <ContentRow title="News" apiUrl={tvShowsApi.news} />
        <ContentRow title="Reality" apiUrl={tvShowsApi.reality} />
        <ContentRow title="Talk" apiUrl={tvShowsApi.talk} />
        <ContentRow title="Comedy" apiUrl={tvShowsApi.comedy} />
        <ContentRow title="Crime" apiUrl={tvShowsApi.crime} />
        <ContentRow title="Action" apiUrl={tvShowsApi.action} />
        <ContentRow title="Family" apiUrl={tvShowsApi.family} />
        <ContentRow title="Kids" apiUrl={tvShowsApi.kids} />
        <ContentRow title="Fantasy" apiUrl={tvShowsApi.fantasy} />
        <ContentRow title="Soap" apiUrl={tvShowsApi.soap} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(TvshowSection);
