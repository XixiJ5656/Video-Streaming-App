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

  //Another way to fetch data!

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(apiUrl);
  //     setMovies(response.data.results);
  //     return response;
  //   };
  //   fetchData();
  // }, [apiUrl]);

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

  // const clearTrailer = () => !trailerUrl;

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="category-row">
      <h1 className="category-name">{title}</h1>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div className="movies-list-row">
        {movies.map((movie) => (
          <img
            className="movie"
            onClick={() => playTrailer(movie)}
            // onMouseLeave={() => clearTrailer()}
            key={movie.id}
            src={`${baseUrl}${movie.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
