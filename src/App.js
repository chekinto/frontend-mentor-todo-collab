import React, { Fragment, useState } from "react";
import Overview from "./components/Overview";
import topImage from "./images/bg-desktop-light.jpg";
import Todo from "./components/Todo";

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addItem = (e) => {
    e.preventDefault();
    if (text !== "") {
      setTodos([...todos, { todo: text, isCompleted: false, id: +new Date() }]);
    }
    setText("");
    console.log(todos);
  };

  const setComplete = (id) => {
    setTodos(
      todos.map((item) =>
        !item.isCompleted && item.id === id
          ? { ...item, isCompleted: true }
          : item.isCompleted && item.id === id
          ? { ...item, isCompleted: false }
          : { ...item }
      )
    );
  };

  const deleteItem = (id) => setTodos(todos.filter((item) => item.id !== id));

  return (
    <Fragment>
      <div className="container">
        <div className="topImage">
          <img src={topImage} alt="" />
          <div className="bottomBg"></div>
        </div>

        <Overview title="Todo" />

        <form action="" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Create a todo"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </form>

        <Todo
          todos={todos}
          setTodos={setTodos}
          setComplete={setComplete}
          deleteItem={deleteItem}
        />

        <div className="bottomTab">
          <ul>
            <li></li>
            <li>All</li>
            <li>Active</li>
            <li>Completed</li>
            <li>Clear Completed</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
