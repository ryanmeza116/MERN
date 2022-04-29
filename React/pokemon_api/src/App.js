import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function App() {
  // We expect an array of pokemon objects back and so we will
  //    choose an empty array as the initial value to be held
  //    in state
  const [pokemon, setPokemon] = useState([]);

  // this will run immediately after the JSX is rendered
  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          console.log(response.data.results);
          setPokemon(response.data.results);
        }  )
        .catch((err) => console.log(err));
  }, []);
      

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <h1> Axios Pokemon Api </h1>
      <ul>
        {pokemon.map((pokemon, index) => (
          <li key = {index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
