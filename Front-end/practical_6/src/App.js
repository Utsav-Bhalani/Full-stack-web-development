import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { text: inputValue.trim(), completed: false }; // Add a completed status
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setInputValue(tasks[index].text);
  };

  const saveTask = () => {
    if (inputValue.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[editingIndex].text = inputValue.trim();
      setTasks(newTasks);
      setEditingIndex(null);
      setInputValue("");
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add or edit a task..."
        />
        {editingIndex !== null ? (
          <button onClick={saveTask}>Save Task</button>
        ) : (
          <button onClick={addTask}>Add Task</button>
        )}
      </div>
      <div className="task-sections">
        <h2>Incomplete Tasks</h2>
        <ul className="task-list">
          {tasks
            .filter((task) => !task.completed)
            .map((task, index) => (
              <li key={index} className="task-item">
                {task.text}
                <div className="task-buttons">
                  <button
                    onClick={() => toggleTaskCompletion(index)}
                    className="complete-button"
                  >
                    ✅
                  </button>
                  <button onClick={() => startEditing(index)}>Edit</button>
                  <button
                    onClick={() => removeTask(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>

        <h2>Completed Tasks</h2>
        <ul className="task-list">
          {tasks
            .filter((task) => task.completed)
            .map((task, index) => (
              <li key={index} className="task-item completed">
                {task.text}
                <div className="task-buttons">
                  <button
                    onClick={() => toggleTaskCompletion(index)}
                    className="complete-button"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => removeTask(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
