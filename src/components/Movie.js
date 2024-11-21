import React, { useState } from 'react';

function Movie({ movie }) {
  const overview = movie.overview ? movie.overview : 'No overview available';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'No rating available'; 
  const [showFullOverview, setShowFullOverview] = useState(false);
  const toggleOverview = () => setShowFullOverview(!showFullOverview);

  return (
    <div style={styles.card}>
      {}
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          style={styles.poster}
        />
      ) : (
        <p>No poster available</p> 
      )}
      <div style={styles.cardContent}>
        <h2 style={styles.title}>{movie.title}</h2>
        {}
        <p style={styles.rating}>
          <span style={styles.star}>★</span> {rating}
        </p>
        <p style={styles.overview}>
          {showFullOverview ? overview : `${overview.substring(0, 100)}...`}
          {}
          <span 
            onClick={toggleOverview} 
            style={styles.readMore}
          >
            {showFullOverview ? ' Show less' : ' Read more'}
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: '200px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  cardContent: {
    padding: '10px',
  },
  poster: { width: '100%', height: '300px', objectFit: 'cover' },
  title: { fontSize: '16px', fontWeight: 'bold', margin: '10px 0' },
  rating: { fontSize: '14px', color: '#FFD700', fontWeight: 'bold', margin: '5px 0' }, 
  star: { color: '#FFD700' }, 
  overview: { fontSize: '12px', color: '#666', padding: '5px 0' }, 
  readMore: { color: '#007BFF', cursor: 'pointer', fontSize: '12px' }, 
};

export default Movie;
