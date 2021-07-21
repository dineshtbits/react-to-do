import React, { useState } from 'react'

function NewTodo({addAnewTodo}) {

  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addAnewTodo(value)
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>add a new todo</label>
        <input type="text" value={value} aria-label="todo-input" onChange={e => setValue(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewTodo