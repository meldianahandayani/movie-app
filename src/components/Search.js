import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={styles.searchInput}
      />
    </div>
  );
}

const styles = {
  searchContainer: {
    position: 'absolute', 
    top: '20px', 
    right: '20px', 
    width: 'auto', 
  },
  searchInput: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    border: '2px solid #ddd',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'border-color 0.3s ease',
  },
};

export default Search;