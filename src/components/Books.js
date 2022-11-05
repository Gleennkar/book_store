import React from 'react';
/* eslint-disable react/prop-types */
/* eslint-disable  react/destructuring-assignment */

function Books(props) {
  return (
    <div className="book-container">
      <h3 className="book-title">{props.title}</h3>
      <p className="book-author">{props.author}</p>
      <button type="button" className="remove-btn">Remove</button>
    </div>
  );
}
export default Books;
