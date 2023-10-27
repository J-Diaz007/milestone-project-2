import React, { useState } from "react";
import TodoInput from './TodoInput';

function App() {

  const [todos, setTodos] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  const addTodo = (todo) => {
    setTodos([...todos, todoText]);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple To-Do List</h1>
        <TodoInput addTodo={addTodo} />
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
