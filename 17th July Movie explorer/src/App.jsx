// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UpcomingMovies from './pages/UpcomingMovies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/movies/upcoming" />} />
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
      </Routes>
    </Router>
  );
}

export default App;
