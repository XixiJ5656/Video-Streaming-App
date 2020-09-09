import React from "react";
import ContentRow from "../components/ContentRow";
import "./HomePage.css";
import { connect } from "react-redux";
import TopBanner from "../components/TopBanner";
import { mixedApi } from "../Apilists";
import { Redirect } from "react-router-dom";

const HomePage = (props) => {
  if (!props.auth.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="content-display">
        <TopBanner />
        <ContentRow title="Trending Movies" apiUrl={mixedApi.trendingMovie} />
        <ContentRow title="Trending TV Shows" apiUrl={mixedApi.trendingTv} />
        <ContentRow title="TV On Air" apiUrl={mixedApi.tvOnAir} />
        <ContentRow title="Popular" apiUrl={mixedApi.netflix} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(HomePage);
