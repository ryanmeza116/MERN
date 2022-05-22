import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PetList from './components/PetList';
import Header from './components/PetHeader';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';
import Pet from './components/Pet'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path = "/" element = {<PetList />} />
          <Route path="/new" element={<NewPet />} />
          <Route path = "/pet/:id" element = {<Pet />} />
          <Route path = "/pet/edit/:id" element = {<EditPet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
