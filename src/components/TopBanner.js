import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { mixedApi } from "../Apilists";

const TopBanner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios
      .get(mixedApi.netflixOriginals)
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(mixedApi.netflixOriginals);
  //     const randomIndex = Math.floor(
  //       Math.random() * response.data.results.length
  //     );
  //     console.log(response.data.results[randomIndex]);
  //     setMovie(response.data.results[randomIndex]);
  //     return response;
  //   };
  //   fetchData();
  // }, []);

  console.log(movie);

  return (
    <div
      className="top-section"
      style={{
        minHeight: "70vh",
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
export default TopBanner;
