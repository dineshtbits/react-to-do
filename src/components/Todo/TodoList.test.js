import { screen, render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

test('renders list', () => {
  render(<TodoList/>)
  const element = screen.getByText("Get Something from Elsewhere")
  expect(element).toBeInTheDocument()
})

