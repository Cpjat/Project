import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY,
    language: 'en-US',
  },
});

export default api;
