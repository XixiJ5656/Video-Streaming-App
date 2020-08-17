import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import apiLists from "../fetchApi/apilists";

const HomeBanner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiLists.netflixOriginals);
      const randomIndex = Math.floor(
        Math.random() * request.data.results.length
      );
      setMovie(request.data.results[randomIndex]);
      return request;
    }
    fetchData();
  }, []);

  //// try to use axios

  return (
    <div
      className="top-section"
      style={{
        minHeight: "75vh",
        backgroundPosition: "center,center",
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-description">
        <h1>{movie?.original || movie?.name} </h1>
        <button className="banner-play-button">play</button>
        <button className="banner-show-details">details</button>
      </div>
    </div>
  );
};
export default HomeBanner;
