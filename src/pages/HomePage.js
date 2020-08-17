import React from "react";
import Row from "../components/Row";
import "../App.css";
import { connect } from "react-redux";
import HomeBanner from "../components/HomeBanner";
import apiLists from "../fetchApi/apilists";
import { Redirect } from "react-router-dom";

const HomePage = (props) => {
  if (!props.auth.uid) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="hompage">
        <HomeBanner />
        <Row title="Top Rated" apiUrl={apiLists.topRated} />
        <Row title="Trending Now" apiUrl={apiLists.trending} />
        <Row title="Comedy Movies" apiUrl={apiLists.comedyMovies} />
        <Row title="NETFLIX ORIGINAL" apiUrl={apiLists.netflixOriginals} />
        <Row title="Romance Movies" apiUrl={apiLists.romanceMovies} />
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
