import React, { useState, useEffect } from "react";
import axios from "axios";
import apiLists from "../fetchApi/apilists";

const Banner = () => {
  const [movie, setMovie] = useState([]);

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
  console.log(movie);
  return (
    <div className="top-section">
      <h1>{movie?.title || movie?.original_title} </h1>
    </div>
  );
};
export default Banner;
