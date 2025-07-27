// src/pages/UpcomingMovies.jsx
import React, { useEffect, useState } from 'react';
import api from '../api';
import MovieCard from '../components/MovieCard';

function UpcomingMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fetchedPages, setFetchedPages] = useState(new Set());

  useEffect(() => {
    const fetchMovies = async () => {
      if (fetchedPages.has(page)) return;

      setLoading(true);
      setError('');

      try {
        const res = await api.get('/movie/upcoming', { params: { page } });
        setMovies((prev) => [...prev, ...res.data.results]);
        setFetchedPages((prev) => new Set(prev).add(page));
      } catch (err) {
        setError('Failed to load movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Upcoming Movies</h1>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {loading && <p className="text-center mt-6">Loading...</p>}

      {!loading && (
        <div className="text-center mt-6">
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default UpcomingMovies;
