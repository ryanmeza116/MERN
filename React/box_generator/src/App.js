import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Box from './components/Box';
import { useState } from 'react'

function App() {
  const [boxArray, setBoxArray] = useState([]);
  return (
    <div className="App">
      <Form boxArray = {boxArray} setBoxArray = {setBoxArray} />
      <div className = "container">
      {boxArray.map((color,index) =>{
        return (
          <Box 
          key = {index}
          color = {color}
          index = {index}
          boxArray = {boxArray}
          setBoxArray = {setBoxArray}
          />
        );
      })}
    </div>
    </div>
  );
}

export default App;
