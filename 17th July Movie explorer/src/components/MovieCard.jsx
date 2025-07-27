// src/components/MovieCard.jsx
import React from 'react';

function MovieCard({ movie }) {
  const {
    title,
    poster_path,
    release_date,
    original_language,
    vote_average,
    overview,
  } = movie;

  const shortOverview =
    overview && overview.length > 120
      ? overview.slice(0, 120) + '...'
      : overview;

  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={
          poster_path
            ? `https://www.omdbapi.com/${poster_path}`
            : 'https://via.placeholder.com/500x750?text=No+Image'
        }
        alt={title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold text-lg mb-1">{title}</h2>
        <p className="text-sm text-gray-600">
          {release_date} | {original_language?.toUpperCase()}
        </p>
        <p className="text-sm text-yellow-600">⭐ {vote_average}</p>
        <p className="text-sm text-gray-700 mt-2">{shortOverview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
