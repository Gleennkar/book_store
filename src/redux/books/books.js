// import { isHtmlElement } from "react-router-dom/dist/dom";
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/AeyELqRTznXa1ZPd7jWT/books';

const initialState = {
  isLoading: true,
  Booklist: {},
  //   Booklist: [
  //     {
  //       id: 1,
  //       title: 'My Tech Journey',
  //       author: 'Gleeny',
  //     },
  //     {
  //       id: 2,
  //       title: 'What You Say',
  //       author: 'Oprah',
  //     },
  //     {
  //       id: 3,
  //       title: 'Unlock It',
  //       author: 'Dan Lok',
  //     },
  //   ],

};

export const getBooks = createAsyncThunk(
  types.BOOKS_FETCHED,
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },

);
export const addBooks = createAsyncThunk(
  types.ADD_BOOK,
  async (payload, thunkAPI) => {
    await axios.post(url, payload);
    return thunkAPI.dispatch(getBooks());
  },

);

export const removeBook = createAsyncThunk(
  types.REMOVE_BOOK,
  async (payload, thunkAPI) => {
    await axios.delete(`${url}/${payload}`);
    return thunkAPI.dispatch(getBooks());
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => ({ ...state, bookList: [...state.Booklist, action.bookDetail] }),
    removeBook: (state, action) => ({
      ...state,
      Booklist: [
        ...state.Booklist.filter((book) => book.id !== action.index.id),
      ],
    }),
  },

  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookList = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

// export const addBooks = (book) => ({
//   type: types.ADD_BOOK,
//   payload: book,
// });

// export const removeBook = (payload) => ({
//   type: types.REMOVE_BOOK,
//   payload,
// });

// // reducer

// const booksReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case types.ADD_BOOK:
//       return { ...state, Booklist: [...state.Booklist, action.payload] };

//     case types.REMOVE_BOOK:
//       return {
//         ...state,
//         Booklist: [
//           ...state.Booklist.filter((book) => book.id !== action.payload),
//         ],
//       };

//     default:
//       return state;
//   }
// };

export default bookSlice.reducer;
