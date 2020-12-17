import React, { useState, useRef, useEffect } from 'react'
import { CustomInput, Overview, StatusBar, Todo } from './components'
import './app.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ id: '', todo: '', completed: false })
  const inputRef = useRef(null)
  console.log('todos :>> ', todos);

  function createTodo(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    e.currentTarget.reset();
  }

  function deleteTodo(id) {
    const deletedTodo = todos.filter(todo => todo.id !== id)
    setTodos(deletedTodo)
  }

  function toggleCompleted(id) {
    const completedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(completedTodos)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <>
      <div className="container">
        <Overview title="Todo" />
        <CustomInput
          type="text"
          placeholder="Create a todo"
          createTodo={createTodo}
          setTodo={setTodo}
          inputRef={inputRef}
        />
        {todos.length < 1 && <p style={{ color: 'var(--white)' }}>Sorry no todos added</p>}

        <div className="todo__wrapper">
          {todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              todos={todos}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
            />
          ))}
          {todos.length > 0 && <StatusBar todos={todos} />}
        </div>
      </div>
    </>
  )
}

export default App;
