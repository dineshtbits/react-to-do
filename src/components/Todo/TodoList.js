import React, {useState} from 'react'
import NewTodo from './NewTodo'
import './TodoList.css'

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
    <div className="wrapper">
      <table>
        <tr>
          <th>Task</th>
          <th>Status</th>
          <th>Actions</th>
          <th>Actions</th>
        </tr>
      {todos.map(todo => (
        <tr key={todo.id} className="todo-item">
          <td>{todo.title}</td> 
          <td>{todo.status}</td>
          <td><button onClick={() => markAsCompleted(todo.id)}>Complete</button></td>
          <td><button onClick={() => deleteTodo(todo.id)}>Delete</button></td>
        </tr>
      ))}
      </table>
      <br/>
      <NewTodo addAnewTodo={addAnewTodo}/>

    </div>
  )
}
export default TodoList