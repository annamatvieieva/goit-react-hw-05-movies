import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
const keyAPI = 'c3d65b3aa74525a580b5ea03f6c1f1d0';

export const getTrendingMovie = async () => {
  const response = await axios.get(`/3/trending/movie/day?api_key=${keyAPI}`);
  return response.data.results;
};

export const getMovieById = async id => {
  const response = await axios.get(`/3/movie/${id}?api_key=${keyAPI}`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`/3/movie/${id}/credits?api_key=${keyAPI}`);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/3/movie/${id}/reviews?api_key=${keyAPI}`);
  return response.data.results;
};
