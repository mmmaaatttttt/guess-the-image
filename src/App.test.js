import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders start button on load", () => {
  render(<App />);
  const linkElement = screen.getByText("Start Game");
  expect(linkElement).toBeInTheDocument();
});
