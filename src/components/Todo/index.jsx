import React, { useState } from 'react'
import './todo.css'

export const Todo = ({ id, todo, completed, deleteTodo }) => {
  const [isChecked, setisChecked] = useState(completed)
  console.log('isChecked :>> ', isChecked, todo, completed);
  return (
    <div className="todo">
      <div className="todo__content">
        <label className={`todo__label ${isChecked ? 'completed' : null}`}>
          <i className="todo__tick fas fa-check"></i>
          <input
            type="checkbox"
            className="checkbox__icon"
            checked={isChecked}
            onChange={() => setisChecked(!isChecked)}
          />
        </label>
        <span className={`${isChecked ? 'completed' : null}`}>{todo}</span>
      </div>
      <i className="todo__icon fas fa-times" onClick={() => deleteTodo(id)} />
    </div>
  )
}

// click on checkbox
// get the id of the clicked checkbox
// change that selected complted to true
