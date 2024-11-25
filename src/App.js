import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies, setLoading, setError } from './slices/movieSlice';
import { setSearchQuery } from './slices/searchSlice';
import { searchMoviesByTitle } from './searchMovies';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

function App() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.data);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const searchQuery = useSelector((state) => state.searchQuery);

  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const apiUrl = process.env.REACT_APP_TMDB_API_URL;

  const fetchMovies = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`${apiUrl}?api_key=${apiKey}&language=en-US&page=1`);
      const data = await response.json();
      dispatch(setMovies(data.results));
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch(setError('Failed to fetch movies. Please try again later.'));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch, apiUrl, apiKey]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const filteredMovies = searchMoviesByTitle(movies, searchQuery);

  return (
    <div style={styles.container}>
      <Header title="Netflix" />
      <Search searchQuery={searchQuery} setSearchQuery={(query) => dispatch(setSearchQuery(query))} />
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
