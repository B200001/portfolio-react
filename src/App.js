import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Main from "./components/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './components/Work';
import Navi from './components/Navi';
import About from './components/About';





const App = () => {
  return (
    <Router>
      
      <main className="main-content">
        <Navi/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  );
 };
 
 export default App;
