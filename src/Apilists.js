const API_KEY = "aea147c3ec4189590c395399f899ea30";

export const mixedApi = {
  trendingMovie: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  trendingTv: `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`,
  tvOnAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  netflix: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export const moviesApi = {
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`,
  animation: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`,
  documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  drama: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`,
  family: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=14`,
  history: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`,
  romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  sifi: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`,
  tvMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export const tvShowsApi = {
  action: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  animation: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=16`,
  comedy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`,
  crime: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=80`,
  documentary: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`,
  drama: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=18`,
  family: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  kids: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10762`,
  mystery: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  news: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10763`,
  reality: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fantasy: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  soap: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10766`,
  talk: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10767`,
};
