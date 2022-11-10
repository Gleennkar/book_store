// import { isHtmlElement } from "react-router-dom/dist/dom";
import types from '../types/types';

const initialState = {
  Booklist: [
    {
      id: 1,
      title: 'My Tech Journey',
      author: 'Gleeny',
    },
    {
      id: 2,
      title: 'What You Say',
      author: 'Oprah',
    },
    {
      id: 3,
      title: 'Unlock It',
      author: 'Dan Lok',
    },
  ],

};
export const addBooks = (book) => ({
  type: types.ADD_BOOK,
  payload: book,
});

export const removeBook = (payload) => ({
  type: types.REMOVE_BOOK,
  payload,
});

// reducer

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return { ...state, Booklist: [...state.Booklist, action.payload] };

    case types.REMOVE_BOOK:
      return {
        ...state,
        Booklist: [
          ...state.Booklist.filter((book) => book.id !== action.payload),
        ],
      };

    default:
      return state;
  }
};

export default booksReducer;
