import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path = "/" element = {<MovieList/>}/>
          <Route path = "/new" element = {<NewMovie/>}/>
          <Route path = "/movie/:id" element = {<Movie/>}/> 
          {/* By passing id in url it is accessible in movie component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
