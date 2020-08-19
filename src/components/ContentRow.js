import React, { useState, useEffect } from "react";
import axios from "axios";
import "../pages/HomePage.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = (props) => {
  const { title, apiUrl } = props;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        return error;
      });
  }, [apiUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const playTrailer = (movie) => {
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
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="category-row">
      <h1 className="category-name">{title}</h1>

      <div className="movies-list-row">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="movie"
            onClick={() => playTrailer(movie)}
            src={`${baseUrl}${movie.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
