import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { mixedApi } from "../Apilists";

const TopBanner = () => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    axios
      .get(mixedApi.netflix)
      .then((response) => {
        const randomIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        setMovie(response.data.results[randomIndex]);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = () => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.origianl_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); /// URLSearchParams
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          return error;
        });
    }
  };

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
          <button className="banner-play-button" onClick={playTrailer}>
            {" "}
            ► play
          </button>
          <button className="banner-show-details">details</button>
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
export default TopBanner;
