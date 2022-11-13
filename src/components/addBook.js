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
    <div className="container-fluid mt-5 form-inputs">
      <h1 className="add-head">ADD A NEW BOOK</h1>
      <form className="justify-content-space-between inputs" onSubmit={handleSubmit}>
        <input type="text" id="title" placeholder="Book-title" value={inputText.title} name="title" className="mx-2 form-on" onChange={handleChange} />
        <input type="text" id="author" placeholder="Book-author" value={inputText.author} name="author" className="mx-2 form-on" onChange={handleChange} />
        <button type="submit" className="btn btn-primary w-10 button">Add</button>
      </form>
    </div>
  );
}
export default AddBook;
