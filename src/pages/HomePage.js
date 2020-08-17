import React from "react";
import Row from "../components/Row";
import { connect } from "react-redux";
import Banner from "../components/Banner";
import apiLists from "../fetchApi/apilists";
import { Redirect } from "react-router-dom";

const HomePage = (props) => {
  if (!props.auth.uid) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="App">
        <Banner />
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
