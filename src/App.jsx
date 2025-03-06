import React from 'react';
import Home from './Home';
import AddBookForm from './components/AddBookForm';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<AddBookForm />} />
      </Routes>
    </div>
  );
}

export default App;