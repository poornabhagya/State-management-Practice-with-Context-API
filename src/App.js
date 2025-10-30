import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <div
        style={{
          maxWidth: "700px",
          margin: "50px auto",
          padding: "20px",
          background: "#f7f9fb",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
      >
        <header style={{ marginBottom: 20, textAlign: "center" }}>
          <h1 style={{ margin: 0, fontSize: "1.8rem", color: "#1c1e21" }}>
            Simple Task Manager (Context API)
          </h1>
          <p style={{ marginTop: 6, color: "#555" }}>
            Learn how to share state using React Context
          </p>
        </header>

        <main>
          <AddTaskForm />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
}

export default App;