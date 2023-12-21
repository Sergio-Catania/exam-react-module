import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import PersonPage from './components/PersonPage';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/person/:id" element={<PersonPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;