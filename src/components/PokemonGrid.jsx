import NewPokemonCard from "./NewPokemonCard";
import { useEffect, useState } from "react";
import { getNewPokemons } from "../firebase";

import "../styles/PokemonGrid.css"; // Importamos el archivo CSS

const PokemonGrid = () => {
  
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    getNewPokemons().then((data) => {
      setPokemonList(data);
    });
  });
  console.log(pokemonList);

  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon) => (
        <NewPokemonCard
          key={pokemon.name}
          name={pokemon.name}
          photoUrl={pokemon.photoUrl}
          type={pokemon.type}
          trainer={pokemon.trainer}
          description={pokemon.description}
        />
      ))}
    </div>
  );
};

export default PokemonGrid;
