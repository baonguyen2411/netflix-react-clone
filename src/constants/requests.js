const API_KEY = 'f81980ff410e46f422d64ddf3a56dddd';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languege=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_kpi=${API_KEY}&languege=en-US`,
  fetchActionMovies: `/discpver/movie?api_kpi=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discpver/movie?api_kpi=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discpver/movie?api_kpi=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discpver/movie?api_kpi=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discpver/movie?api_kpi=${API_KEY}&with_genres=99`,
};

export default requests;
