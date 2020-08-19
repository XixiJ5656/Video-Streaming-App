import React from "react";

const ContentBox = ({ movie, src }) => {
  console.log(src);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <img
        className="movie"
        // onMouseLeave={() => clearTrailer()}

        // src={`${baseUrl}${movie.backdrop_path}`}
        alt=""
      />
    </div>
  );
};

export default ContentBox;
