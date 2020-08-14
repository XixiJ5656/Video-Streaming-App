import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl="http://api.themoviedb.org/3",


const Row=(props)=> {
  const [movies, setMovies] = useState([]);
  const { title, apiUrl } = props;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(apiUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [apiUrl]);
  console.log(movies);
  return (
    <div className="category-row">
      <h1>{title}</h1>
      <div className="movies-list-row">
        {movies.map((movie) => (
          <img key={movid.id} src={`${baseUrl}${movie.poster_path}`} alt="NOT FOUND" />
        ))}
      </div>
    </div>
  );
}

export default Row;
