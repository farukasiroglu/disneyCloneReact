import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "dc016d58b3038dffb30e4a1b44435116";

const getTrendingMovies = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

export default {
  getTrendingMovies,
};
