// import { isHtmlElement } from "react-router-dom/dist/dom";
import types from '../types/types';

const initialState = [{
  title: 'Gleeny book',
  author: 'Gleen',
  id: 1,
}];

export const addBooks = (book) => ({
  type: types.ADD_BOOK,
  payload: book,
});

export const removeBook = (index) => ({
  type: types.REMOVE_BOOK,
  payload: index,
});

// reducer

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, action.payload];
    case types.REMOVE_BOOK:
      return [...state.filter((state) => state.id !== action.payload)];
    default:
      return state;
  }
};

export default booksReducer;
