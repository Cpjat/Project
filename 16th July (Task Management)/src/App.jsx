import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'Pending' }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
  };

  const changeStatus = (id, newStatus) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  return (
    <div className="app">
      <h1>📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onEdit={editTask}
        onStatusChange={changeStatus}
      />
    </div>
  );
}

export default App;
