import "../styles/NewPokemonCard.css";
import { useState } from "react";

const NewPokemonCard = ({ name, photoUrl, type, trainer, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return isExpanded ? (
    <div className="pokemon-info" onClick={() => setIsExpanded(!isExpanded)}>
      <h2 className="pokemon-name">{name}</h2>
      <img src={photoUrl} alt={name} className="pokemon-photo" />
      <p className="pokemon-type">Tipo: {type}</p>
    </div>
  ) : (
    <div className="pokemon-info" onClick={() => setIsExpanded(!isExpanded)}>
      <h2 className="pokemon-name">{name}</h2>
      <img src={photoUrl} alt={name} className="pokemon-photo" />
      <p className="pokemon-type">Tipo: {type}</p>
      <p className="pokemon-type">Entrenador: {trainer}</p>
      <p className="pokemon-type">Descripcion: {description}</p>
    </div>
  );
};

export default NewPokemonCard;
