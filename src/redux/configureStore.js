import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootStore = configureStore({
  reducer: {
    book: booksReducer,
    categories: categoriesReducer,
  },

});

export default rootStore;
