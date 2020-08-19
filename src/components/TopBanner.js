import React, { useState, useEffect } from "react";

import axios from "axios";
import "./Banner.css";

import { mixedApi } from "../Apilists";

const TopBanner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(mixedApi.netflix)
      .then((response) => {
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        console.log(response.data.results[randomIndex]);
        setMovie(response.data.results[randomIndex]);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  console.log(movie);
  return (
    <div
      className="top-section"
      style={{
        minHeight: "75vh",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        boxShadow: "0 0 8 8 white inset",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      {" "}
      <div className="overlay">
        <div className="banner-description">
          <h1 className="show-title">
            {movie?.original_title || movie?.name}{" "}
          </h1>
          <p className="show-description">{movie.overview && movie.overview}</p>
        </div>
        <div className="banner-button">
          <button className="banner-play-button"> ► play</button>
          <button className="banner-show-details">details</button>
        </div>
      </div>
    </div>
  );
};
export default TopBanner;
