import { render, screen } from "@testing-library/react";
import LogoutButton from "./LogoutButton.jsx";
import "@testing-library/jest-dom";
test("Login Button correct render", () => {
  render(<LogoutButton />);
  const text = screen.getByText("Logout");
  expect(text).toBeInTheDocument();
});
