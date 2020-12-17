import React from "react";

const Todo = ({ todos, setTodos, setComplete }) => {
  return (
    <div className="todoItems">
      {todos.map((todo) => (
        <ul>{<li className="todoItem">{todo.todo}</li>}</ul>
      ))}
    </div>
  );
};

export default Todo;
