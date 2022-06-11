import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState("");

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const formReset = () => {
    setTodo("");
    setDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      todo: todo,
      date: date,
      id: Math.floor(Math.random() * 10000),
    };

    setTodos([...todos, newTodo]);
    formReset();
  };

  return (
    <div className="container">
      <h2>Hey! Enter your to-dos</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter to-do: </span>
          <input
            type="text"
            value={todo}
            required
            maxLength="25"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </label>

        <label>
          <span>Enter date: </span>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
      {todos && (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <span className="todo">{item.todo}</span> Deadline: {item.date}
              <span className="remove-icon" onClick={() => handleDelete(item.id)}>
                Remove
              </span>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
