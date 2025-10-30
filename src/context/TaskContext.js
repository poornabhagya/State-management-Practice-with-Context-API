// src/context/TaskContext.js
import React, { createContext, useState } from "react";

// 1. Create the Context object
export const TaskContext = createContext();

// 2. Create a Provider component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Complete task
  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: true } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 3. Return provider with state + actions
  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
