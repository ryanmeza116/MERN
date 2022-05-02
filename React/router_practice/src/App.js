import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      <Route path = "/Home/" element = {<Home />}/>
      <Route path = "/:word" element = {<ParamsComponent />}/>
      <Route path = "/:word:color:bgCol" element = {<ParamsComponent />}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
