import { useState, useEffect } from 'react';

const API_BASE = "http://localhost:8091";

function App() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    GetTodos();
  }, []);

  const GetTodos = () => {
    fetch(API_BASE + "/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data);
        console.log(data); 
      })
      .catch(err => console.error("Error: ", err));
  }

  return (
    <div className="App">
      <h1>Welcome, Sarah</h1>
      <h4>Your Tasks</h4>

      <div className="Lots of todos">
        {todos.map(todo => (
          <div className={
            "todo" + (todo.complete ? "is-complete" : "")
        } key={todo._id}>

            <div className="checkbox"></div>

            <div className="text">{todo.text}</div>

            <div className="delete-todo">x</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;