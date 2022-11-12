import { configureStore, combineReducers  } from '@reduxjs/toolkit';
 import bookSlice from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  book: bookSlice,
  categories: categoriesReducer,

});

const rootStore = configureStore({ reducer });

export default rootStore;
