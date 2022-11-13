import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import AddBook from './addBook';
import { removeBook, getBooks } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const library = useSelector((state) => state.book);
  console.log(library);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="container-fluid d-flex-column w-80 mt-5 book-container">
        {Object.keys(library.Booklist).map((bookItem) => (

          <div className="d-flex mt-3 book" key={uuidv4()}>
            <h2 className="book-title">{library.Booklist[bookItem][0].title}</h2>
            <p className="book-author">{library.Booklist[bookItem][0].author}</p>
            <button type="button" id={bookItem} className="btn btn-primary remove-btn" onClick={(e) => { handleRemove(e.target.id); }}>Remove</button>
          </div>
        ))}

      </div>
      <AddBook />
    </>

  );
}
export default Books;
