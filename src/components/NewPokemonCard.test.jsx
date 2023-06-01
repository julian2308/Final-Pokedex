import { render, screen } from "@testing-library/react";
import NewPokemonCard from "./NewPokemonCard.jsx";
import "@testing-library/jest-dom";

const cr7 = {
  name: "Cristiano Ronaldo",
  type: "Futbol",
  trainer: "Ancelotti",
  description: "O melhor jogador de futebol do mundo"
}
test( "Correct render on name", () => {
  render(<NewPokemonCard name ={cr7.name} photoUrl="" type="" trainer="" description="" />);
  const text = screen.getByText("Cristiano Ronaldo");
  expect(text).toBeInTheDocument();
});

