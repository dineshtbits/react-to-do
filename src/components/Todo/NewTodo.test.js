import { render, screen, fireEvent } from "@testing-library/react";
import NewTodo from "./NewTodo";

test('tests new form contains title', () => {
  render(<NewTodo/>)
  const elem = screen.getByText(/add a new todo/i);
  expect(elem).toBeInTheDocument()
});


test('when a new todo is entered it is displayed correctly', () => {
  render(<NewTodo/>)
  const elem = screen.getByLabelText("todo-input");
  fireEvent.change(elem, {target: {value: "new task"}})
  expect(elem.value).toBe("new task")
});