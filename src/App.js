import React from "react";
import Row from "./components/Row";
import "./App.css";
import Banner from "./components/Banner";
// import Navbar from "./components/Navbar";
import apiLists from "./fetchApi/apilists";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <Row title="Top Rated" apiUrl={apiLists.topRated} />
      <Row title="Trending Now" apiUrl={apiLists.trending} />
      <Row title="Comedy Movies" apiUrl={apiLists.comedyMovies} />
      <Row title="NETFLIX ORIGINAL" apiUrl={apiLists.netflixOriginals} />
      <Row title="Romance Movies" apiUrl={apiLists.romanceMovies} />
    </div>
  );
}

export default App;
