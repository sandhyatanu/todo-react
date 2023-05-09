import React, { useState } from 'react'
import { Todoform } from './components/Todoform'
import './App.css'
import { Todoui } from './components/Todoui'
function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <Todoform
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <Todoui todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
