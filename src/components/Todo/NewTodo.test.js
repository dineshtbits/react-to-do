import { render, screen, fireEvent } from "@testing-library/react";
import NewTodo from "./NewTodo";

test('sm', () => {
  render(<NewTodo/>)
  const elem = screen.getByText(/add a new todo/i);
  expect(elem).toBeInTheDocument()
});


test('sm2', () => {
  render(<NewTodo/>)
  const elem = screen.getByLabelText("todo-input");
  fireEvent.change(elem, {target: {value: "new task"}})
  expect(elem.value).toBe("new task")
});