import React from 'react'

export const Todoform = ({ input, setInput, todos, setTodos }) => {
  const addInput = (e) => {
    setInput(e.target.value)
  }
  const addItem = (e) => {
    e.preventDefault()
    setTodos([...todos, { t: input, c: false }])
    console.log(todos)
    setInput('')
  }
  return (
    <div>
      <form>
        <input type="text" value={input} onChange={addInput} />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  )
}
