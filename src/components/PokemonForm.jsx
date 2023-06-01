import { useState } from "react";
import "../styles/PokemonForm.css"
import { addNewPokemon } from "../firebase";

const PokemonForm = () => {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    description: "",
    photoUrl: "",
    type: "",
    trainer: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPokemonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPokemon(pokemonData);
  };

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <label>
        Nombre Pokemon:
        <input
          type="text"
          name="name"
          value={pokemonData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Descripción:
        <textarea
          name="description"
          value={pokemonData.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        URL para la foto:
        <input
          type="text"
          name="photoUrl"
          value={pokemonData.photoUrl}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Tipo:
        <input
          type="text"
          name="type"
          value={pokemonData.type}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Entrenador Emblema:
        <input
          type="text"
          name="trainer"
          value={pokemonData.trainer}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PokemonForm;
