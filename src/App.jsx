import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

function App () {
  const [todos, setTodos] = React.useState([])

  function handleRemoveTodo (index) {
    setTodos(todos => todos.filter((todo, _index) => _index !== index))
  }

  function handleAddTodo (event) {
    event.preventDefault()

    const text = event.target.text.value

    if (!text || todos.includes(text)) return

    setTodos(todos => todos.concat(text))

    event.target.text.value = ''
  }

  return (
    <div >
      <h3>Lista de Tareas</h3>
      <form onSubmit={handleAddTodo}>
        <input name="text" type="text" />
        <button>Agregar</button>
      </form>
      <ul>
        {todos.map((todo, index) => <li key={uuidv4()}>{todo}<button onClick={() => handleRemoveTodo(index)}>X</button></li>)}
      </ul>
    </div>
  )
}

export default App
