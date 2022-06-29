import React, { useState } from 'react';
import Home from './components/Home';
import Resume from './components/Resume'
import About from './components/About'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (

    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>


  );
}

export default App;
