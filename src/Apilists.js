const API_KEY = "aea147c3ec4189590c395399f899ea30";

export const mixedApi = {
  trending: `http://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  netflixOriginals: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRated: `http://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US,`,
};

export const moviesApi = {
  action: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
  animation: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  documentary: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  drama: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  family: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fantasy: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  history: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  romance: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  sifi: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  tvMovie: `http://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export const tvShowsApi = {
  action: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  animation: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
  comedy: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  crime: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=80`,
  documentary: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
  drama: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
  family: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  kids: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  mystery: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  news: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  reality: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fantasy: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  soap: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  talk: `http://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10767`,
};
