import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, createTask, deleteTask, updateTask } from "./api";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTaskData, setEditTaskData] = useState(null);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    const newTask = { title };
    const res = await createTask(newTask);
    setTasks([...tasks, res.data]);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => setEditTaskData(task);

  const handleUpdate = async (id, title) => {
    const updated = { title };
    await updateTask(id, updated);
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title } : task)));
    setEditTaskData(null);
  };

  const clearEdit = () => setEditTaskData(null);

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm addTask={addTask} editTaskData={editTaskData} updateTask={handleUpdate} clearEdit={clearEdit} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
