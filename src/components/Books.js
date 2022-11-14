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

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className=" book-container">
        {Object.keys(library.Booklist).map((bookItem) => (
        <div className="d-flex">
          <div className="flex-col mt-3 book" key={uuidv4()}>
            <h2 className="book-title">{library.Booklist[bookItem][0].title}</h2>
            <p className="book-author">{library.Booklist[bookItem][0].author}</p>
            <ul className="book-buttons d-flex">
              <li className="book-button d-flex mt-2 w-90"><button className=" d-flex btn-book" type="button">Comments</button></li>
              <li className="book-button-fluid d-flex mt-2 w-90">
                <button type="button" id={bookItem} className=" d-flex remove-btn" onClick={(e) => { handleRemove(e.target.id); }}>Remove</button>
              </li>
              <li className="book-button-fluid d-flex mt-2 w-90"><button className="d-flex btn-book1" type="button">Edit</button></li>
            </ul>
          </div>

          
        <div className="cirPro d-flex">
        <div className="oval">X</div>
        <div className="progress-container">
          <p className="perc">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress flex-column">
        <p className="chap-1">CURRENT CHAPTER</p>
        <p className="chap-2">Chapter 17</p>
        <button className="btn-chapter" type="button">UPDATE PROGRESS</button>
      </div>

      </div>

        ))}


      </div>
      <AddBook />
    </>

  );
}
export default Books;
