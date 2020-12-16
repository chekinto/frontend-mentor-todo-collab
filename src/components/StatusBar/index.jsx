import React from 'react'
import './stylebar.css'

export const StatusBar = ({ todos }) => {
  return (
    <div className="options__container">
      <div className="options__remaining">
        <p>{todos.length} {todos.length === 1 ? 'item' : 'items'}</p>
      </div>

      <div className="options__status">
        <span className="all">All</span>
        <span className="active">Active</span>
        <span className="completed">Completed</span>
      </div>

      <div className="options__completed">
        <span>Clear completed</span>
      </div>
    </div>
  )
}
