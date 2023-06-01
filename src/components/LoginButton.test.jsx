import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton.jsx";
import "@testing-library/jest-dom";
import PokemonContext from "../context/PokemonContext.js";
test("Login Button correct render", () => {
  render(<LoginButton />);
  const text = screen.getByText("Login");
  expect(text).toBeInTheDocument();
});
