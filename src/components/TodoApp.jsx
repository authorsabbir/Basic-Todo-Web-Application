import "./TodoApp.css";
import { useState } from "react";

function TodoApp() {
  const [todo, setTodo] = useState([
    "Go to School",
    "Go to Market",
    "Writing Blog",
    "Build Project",
  ]);
  const [input, setInput] = useState("");

  const handleOChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    if (input) {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const handleTodoDelete = (item) => {
    setTodo(todo.filter((task) => task!== item));
  };

  return (
    <>
      <div className="container">
        <h1>Todo Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleOChange}
            type="text"
            placeholder="Enter your task"
            value={input}
          />
          <button type="submit">Add Task</button>
        </form>

        {/* Todo List */}
        <ul>
          {todo.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={() => handleTodoDelete(item)} className="delete-btn">Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoApp;
