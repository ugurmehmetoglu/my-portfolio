import React, {useState} from 'react';
import Home from './components/Home';
import Resume from './components/Resume'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
           <Route  path="/resume" element={<Resume />} />
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
