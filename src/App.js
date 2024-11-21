import React, { useState, useEffect, useCallback } from 'react';
import { searchMoviesByTitle } from './searchMovies';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const apiUrl = process.env.REACT_APP_TMDB_API_URL;
  const fetchMovies = useCallback(async () => {
    try {
      const response = await fetch(`${apiUrl}?api_key=${apiKey}&language=en-US&page=1`);
      const data = await response.json();
      setMovies(data.results); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch movies. Please try again later.'); 
    } finally {
      setLoading(false); 
    }
  }, [apiUrl, apiKey]);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  const filteredMovies = searchMoviesByTitle(movies, searchQuery);

  return (
    <div style={styles.container}>
      <Header title="Netflix" />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div style={styles.movieList}>
          {filteredMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
const styles = {
  container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
  movieList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default App;
