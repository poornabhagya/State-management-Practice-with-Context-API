// src/components/TaskList.js
import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks, completeTask, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p>No tasks yet. Add one above! 😊</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
            background: task.isCompleted ? "#d4edda" : "#f8d7da",
          }}
        >
          <span
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
              fontWeight: "500",
            }}
          >
            {task.name}
          </span>
          <div>
            {!task.isCompleted && (
              <button
                onClick={() => completeTask(task.id)}
                style={{
                  marginRight: "8px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                Complete
              </button>
            )}
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
