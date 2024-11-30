import "./App.css";
import List from "./components/List";
import React, { useState } from "react";
import AddTask from "./components/AddTask";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  const [tasks, setTasks] = useState([]); // State for tasks

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 className="text-center">ToDo App</h1>

      <div className="my-4">
        <AddTask addTask={addTask} />
        <List tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}