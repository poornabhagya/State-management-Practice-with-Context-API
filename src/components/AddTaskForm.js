// src/components/AddTaskForm.js
import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddTaskForm() {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useContext(TaskContext); // Access addTask from context

  function handleSubmit(e) {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName);
    setTaskName("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{
          padding: "8px",
          width: "200px",
          marginRight: "10px",
          borderRadius: "5px",
        }}
      />
      <button
        type="submit"
        style={{ padding: "8px 12px", borderRadius: "5px", cursor: "pointer" }}
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
