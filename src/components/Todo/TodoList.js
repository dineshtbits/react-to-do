import React, {useState} from 'react'
import NewTodo from './NewTodo'

const defaultTodos = [
  {
    id: 1,
    title: "Get Something from Grocery store",
    status: "open"
  },
  {
    id: 2,
    title: "Get Something from Elsewhere",
    status: "open"
  },
  {
    id: 3,
    title: "Call my friend",
    status: "completed"
  }
]

function TodoList() {
  const [todos, setTodos] = useState(defaultTodos)

  const markAsCompleted = (index) => {
    const newTodos = todos.map(t => {
      if (t.id === index) {
        t.status = "completed"
      }
      return t
    })
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter(t => t.id !== index)
    setTodos(newTodos)
  }

  const addAnewTodo = (todo) => {
    const t = {id: todos.length + 1, title: todo, status: "open"}
    const newTodos = [...todos, t]
    setTodos(newTodos)
  }

  return (
    <div>
      <div>This is a todo page</div>
      {todos.map(todo => (
        <div key={todo.id}>
          <span>{todo.title}</span> <span>{todo.status}</span>
          <button onClick={() => markAsCompleted(todo.id)}>Complete</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <NewTodo addAnewTodo={addAnewTodo}/>

    </div>
  )
}
export default TodoList