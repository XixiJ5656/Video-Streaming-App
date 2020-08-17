const API_KEY = "aea147c3ec4189590c395399f899ea30";

const apiLists = {
  trending: `http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US,`,
  actionMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  romanceMovies: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  documentaries: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default apiLists;

// url="http://api.themoviedb.org/3/trending/all/week?api_key=aea147c3ec4189590c395399f899ea30&language=en-US"
// url="http://api.themoviedb.org/3/trending/fjCezXiQWfGuNf4t7LruKky7kwV.jpg"
