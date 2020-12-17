import React from 'react'
import './todo.css'

export const Todo = ({ id, todo, completed, deleteTodo, toggleCompleted }) => {
  return (
    <div className="todo">
      <div className="todo__content">
        <label className={`todo__label ${completed ? 'completed' : null}`}>
          <i className="todo__tick fas fa-check"></i>
          <input
            type="checkbox"
            className="checkbox__icon"
            checked={completed}
            onChange={() => toggleCompleted(id)}
          />
        </label>
        <span className={`${completed ? 'completed' : null}`}>{todo}</span>
      </div>
      <i className="todo__icon fas fa-times" onClick={() => deleteTodo(id)} />
    </div >
  )
}

// click on checkbox
// get the id of the clicked checkbox
// change that selected complted to true
