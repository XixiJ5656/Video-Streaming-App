import React from "react";
import Row from "./components/Row";
import "./App.css";
import requests from "./fetchApi/apirequests";

function App() {
  return (
    <div className="App">
      <Row title="Top Rated" apiUrl={requests.fetchTopRated} />
      {/* <Row title="Trending Now" apiUrl={requests.fetchTrending} /> */}
    </div>
  );
}

export default App;
