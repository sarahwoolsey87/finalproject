import React, { useState, useEffect } from "react";
import axios from "axios";
import DragAndDrop from "./DragAndDrop";

const API_BASE = "https://dailyplanner-er57.onrender.com";

export default function Main() {
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    const API = API_BASE + "/todos";
    const res = await axios.get(API);
    setTodos(res.data);
  };

  const completeTodo = async (id) => {
    const API = API_BASE + "/todo/complete/" + id;
    const res = await axios.put(API);
    getTodos();
  };

  const deleteTodo = async (id) => {
    const API = API_BASE + "/todo/delete/" + id;
    const res = await axios.delete(API);
    getTodos();
  };

  const addTodo = async () => {
    const data = await fetch(API_BASE + "/todo/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: newTodo,
      }),
    }).then((res) => res.json());

    setTodos([...todos, data]);
    setPopupActive(false);
    setNewTodo("");
  };
  return (
    <div className="App">
      <h1>Here's your To-Do list, Motherfucker!</h1>
      <h4>Your Tasks:</h4>
      {/* <DragAndDrop todos={todos} /> */}{" "}
      <div className="Lots of todos">
        {todos.map((todo) => (
          <div
            className={"todo " + (todo.complete ? "is-complete" : "")}
            key={todo._id}
          >
            <div className="checkbox"></div>
            <div className="text" onClick={() => completeTodo(todo._id)}>
              {todo.text}
            </div>
            <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
              x
            </div>
          </div>
        ))}
      </div>
      <div className="addPopup" onClick={() => setPopupActive(true)}>
        +
      </div>
      {popupActive ? (
        <div className="popup">
          <div className="closePopup" onClick={() => setPopupActive(false)}>
            x
          </div>
          <div className="content">
            <h3>Add Task</h3>
            {newTodo}
            <input
              type="text"
              className="add-todo-input"
              onChange={(e) => setNewTodo(e.target.value)}
              value={newTodo}
            />
            <div className="button" onClick={addTodo}>
              Create Task
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
