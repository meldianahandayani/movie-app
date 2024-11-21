import React from 'react';

function Header({ title }) {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>{title}</h1>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: '20px',
    padding: '10px 0',
  },
  logo: { fontSize: '40px', fontWeight: 'bold', color: '#e50914', margin: '0' },
};

export default Header;