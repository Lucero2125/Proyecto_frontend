import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './views/HomePage';
import AddClothingPage from './views/AddClothingPage';
import EditClothingPage from './views/EditClothingPage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddClothingPage />} />
        <Route path="/edit/:id" element={<EditClothingPage />} />
      </Routes>
    </Router>
  );
}

export default App;