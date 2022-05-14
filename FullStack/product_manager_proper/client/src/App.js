import './App.css';
import OneProduct from './components/OneProduct';
import Main from './views/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      {/* <Routes path = '/' element = {<CreateProduct />}  /> */}
      <Route path = '/' element = {<Main />} />
      <Route path = '/product/:id' element = {<OneProduct />} /> 
      {/* id in url doesnt have to match backend specification, only needs to be consistent on Front End */}
      {/* Two elements cannot be displayed at same pathway -- which is why view is necessary */}
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
