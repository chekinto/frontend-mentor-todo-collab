import React from 'react'
import './custom-input.css'

export const CustomInput = ({ createTodo, setTodo, setTodos, setErrorMessage, setError, ...otherProps }) => {

  function handleChange(e) {
    setTodo({
      id: +new Date(),
      todo: e.target.value,
      completed: false
    })
  }

  return (
    <form onSubmit={createTodo}>
      <input className="custom-input" {...otherProps} onChange={handleChange} />
    </form>
  )
}

