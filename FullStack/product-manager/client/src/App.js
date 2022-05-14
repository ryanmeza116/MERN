import './App.css';
import CreateProduct from './components/CreateProduct';
import DisplayAll from './components/DisplayAll';
import OneProduct from './components/OneProduct';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path = '/' element = {<CreateProduct />} />
          <Route path = '/' element = {<DisplayAll />} /> */}
          <Route path = '/' element = {<Main />}/>
          <Route path = '/product/:id' element = {<OneProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
