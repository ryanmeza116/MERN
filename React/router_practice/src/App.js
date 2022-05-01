import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/about" element = {<About />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
