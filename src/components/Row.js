import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const { title, apiUrl } = props;
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
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
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search); /// need more explaination
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const clearTrailer = () => !trailerUrl;
  return (
    <div className="category-row">
      <h1>{title}</h1>
      <div className="movies-list-row">
        {movies.map((movie) => (
          <img
            className="movie"
            onClick={() => playTrailer(movie)}
            // onMouseLeave={() => clearTrailer()}
            // key={movie.id}
            src={`${baseUrl}${movie.backdrop_path}`}
            alt="NOT FOUND"
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
