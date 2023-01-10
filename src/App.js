import React, { useState, useEffect } from "react";
import POKEMONS from "./models/mock-pockemon.ts";
import Pokemon from "./models/pokemon.ts";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  //console.log(POKEMONS);
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          {pokemons.map(({ id, name, picture, created }) => (
            <div className="col s6 m4" key={id}>
              
              <div className="card horizontal">
                <div className="card-image">
                  <img src={picture} alt={name} />
                </div>
                <div className="card-stached">
                  <div className="card-content">
                    <p>{name}</p>
                    <p>
                      <small>{created.toString()}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
