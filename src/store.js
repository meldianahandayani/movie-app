// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import searchReducer from './slices/searchSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    searchQuery: searchReducer,
  },
});

export default store;
