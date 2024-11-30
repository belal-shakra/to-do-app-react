import React, { useState } from "react";

export default function AddTask({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        style={{ flex: 1, padding: "8px" }}
        className="rounded"
      />
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}