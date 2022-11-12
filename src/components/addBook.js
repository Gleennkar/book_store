import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...inputText, item_id: uuidv4(), category: 'Fiction' };
    dispatch(addBooks(newBook));
    inputText.title = '';
    inputText.author = '';
  };
  return (
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Book-title" value={inputText.title} name="title" onChange={handleChange} />
        <input type="text" id="author" placeholder="Book-author" value={inputText.author} name="author" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddBook;
