import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './addBook';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

function Books() {
  const library = useSelector((state) => state.book);
  const dispatch = useDispatch();
  return (
    <>
      <div className="book-container">
        {library.Booklist.map((bookItem) => (

          <div className="book" key={bookItem.id}>
            <h2 className="book-title">{bookItem.title}</h2>
            <p className="book-author">{bookItem.author}</p>
            <button type="submit" className="remove-btn" onClick={() => { dispatch(removeBook(bookItem.id)); }}>Remove</button>
          </div>
        ))}

      </div>
      <AddBook />
    </>

  );
}
export default Books;
