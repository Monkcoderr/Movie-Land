import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4b3d144e';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // <--- 1. New State

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      {/* 2. The Search Bar UI */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          onClick={() => searchMovies(searchTerm)}
        >
            {/* Using an emoji as the icon for simplicity */}
            <span style={{fontSize: '30px', cursor: 'pointer'}}>🔍</span>
        </div>
      </div>

      <div className="container">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;