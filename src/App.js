import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navbar';
import Book from './components/Book';
import Categories from './components/Categories';

const App = () => (
  <div className="app">
    <Nav />
    <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
