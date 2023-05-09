import React from 'react'
import '../App.css'

export const Todoui = ({ todos, setTodos }) => {
  const removeItem = (i) => {
    const newTodos = [...todos]
    newTodos.splice(i, 1)
    setTodos([...newTodos])
  }
  const complete = (i) => {
    setTodos(
      todos.map((t, idx) => {
        if (idx === i) {
          return { t: t.t, c: !t.c }
        }
        return { ...t }
      })
    )
  }
  return (
    <div>
      {todos.map((t, i) => (
        <div>
          <span key={i} id="para" className={t.c ? 'Completed' : ''}>
            {t.t}
          </span>
          <button onClick={() => complete(i)}>C</button>
          <button onClick={() => removeItem(i)}>X</button>
        </div>
      ))}
    </div>
  )
}
