import { render, screen } from "@testing-library/react"
import Home from "../components/Home.jsx"
import "@testing-library/jest-dom"
test("Title correct render on home", () => {


    render(<Home/>)
    const text = screen.getByText("Welcome to Julian's Pokedex (Alvarado + Durán)")
    expect(text).toBeInTheDocument()
})