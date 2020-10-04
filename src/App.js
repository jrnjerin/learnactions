import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random(),
        task: input
      }
    ]
    );
    setInput("");
  }

  return (
    <div className="app">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>add</button>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>{todo.task}</li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;
