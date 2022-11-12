/* eslint no-param-reassign: "error" */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import types from '../types/types';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/leWAbFKLswud3ymuFM6C/books';

const initialState = {
  isLoading: true,
  Booklist: [],

};

export const getBooks = createAsyncThunk(
  types.BOOKS_FETCHED,
  async (thunkAPI) => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
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
    await axios.delete(`${url}/${payload}`, { item_id: payload });
    return thunkAPI.dispatch(getBooks());
  },
);

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => ({ ...state, Booklist: [...state.Booklist, action.bookDetail] }),
    removeBook: (state, action) => ({
      ...state,
      Booklist: [
        ...state.Booklist.filter((book) => book.id !== action.id),

      ],
    }),
  },

  extraReducers: {
    [getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Booklist = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default bookSlice.reducer;
