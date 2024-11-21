export const searchMoviesByTitle = (movies, query) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
};
