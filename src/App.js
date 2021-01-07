import './App.css';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  
  const requestPokemon = () => {
    fetch( "https://pokeapi.co/api/v2/pokemon?limit=1118")
    .then(response => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse);
      setPokemon(jsonResponse.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  
  
  
  return (
    <div className="App">
      <button onClick={requestPokemon}>Fetch Pokemon</button>
      {
        pokemon.map((pokemonName, idx) => (
          <ul key={idx}>
            <li>{pokemonName.name}</li>
          </ul>
        ))
      }
    </div>
  );
}

export default App;
