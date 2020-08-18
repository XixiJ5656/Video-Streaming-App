import React from "react";
import Row from "../components/Row";
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
        <Row title="Trending Now" apiUrl={mixedApi.trending} />
        <Row title="Top Rated" apiUrl={mixedApi.topRated} />
        <Row title="NETFLIX ORIGINAL" apiUrl={mixedApi.netflixOriginals} />
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

export default connect(mapStateToProps)(HomePage);
