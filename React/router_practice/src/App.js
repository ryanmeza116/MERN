import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Router, Route,} from 'react-router-dom';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import MultiParam from './components/MultiParam';

function App() {
  return (
    <div className='App'>
  <BrowserRouter>
  
    <Routes>

      <Route path = "/home/" element = {<Home />}/>
      <Route path = "/:word" element = {<ParamsComponent />}/>
      <Route path = "/:word/:color/:background" element = {<MultiParam />}/>
    </Routes>
  </BrowserRouter>
    </div>
    
  );
}

export default App;
