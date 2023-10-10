// import logo from './logo.svg';
import './App.css';
// import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Link } from 'react-router-dom';
import Homepage from './components/homepage';
import Upload from './components/upload';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/upload" element={<Upload/>} />
        </Routes>
      </Router>
  );
}

export default App;
