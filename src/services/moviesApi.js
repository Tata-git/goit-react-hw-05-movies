import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '74dab5764eb399e955b3b18efd4e4a86';
// Дефолтні налаштування для запиту axios
axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
};
//  - /trending/get-trending [список самых популярных фильмов] [на сегодня] для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> (https://developers.themoviedb.org/3/trending/get-trending -> Try it out -> movie)
// Path Parameters: media_type, time_window - required
// Query String: query - required
export const getListTrendingMovies = async () => {
  const response = axios.get(`/trending/movie/day?api_key=${key}`);
  return (await response).data.results;
};

//  - /search/search-movies [поиск кинофильма по ключевому слову] [на странице фильмов].
// Query String: api_key, query - required
export const searchMovieKeyword = async query => {
  const response = axios.get(
    `/search/movie?api_key=${key}&language=en-US&page=1&query=${query}&include_adult=false`
  );
  return (await response).data.results;
};

//  - /movies/get-movie-details [запрос полной информации о фильме] [для страницы кинофильма].
// Path Parameters: movie_id - required
// Query String: api_key - required
export const getFullDetailsMovie = async movieId => {
  const response = axios.get(`/movie/${movieId}?api_key=${key}&language=en-US`);
  return (await response).data;
};

//  - /movies/get-movie-credits [запрос информации о актёрском составе] [для страницы кинофильма].
// Path Parameters: movie_id - required
// Query String: api_key - required
export const getCastDetails = async movieId => {
  const response = axios.get(
    `/movie/${movieId}/credits?api_key=key}&language=en-US`
  );
  return (await response).data.cast;
};
//  - /movies/get-movie-reviews [запрос обзоров] [для страницы кинофильма].
// Path Parameters: movie_id - required
// Query String: api_key - required
export const getReviews = async movieId => {
  const response = axios.get(
    `/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return (await response).data.results;
};
