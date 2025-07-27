import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTaskData, updateTask, clearEdit }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editTaskData) {
      setTask(editTaskData.title);
    }
  }, [editTaskData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    if (editTaskData) {
      updateTask(editTaskData.id, task);
    } else {
      addTask(task);
    }
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">{editTaskData ? "Update" : "Add"}</button>
      {editTaskData && <button onClick={clearEdit}>Cancel</button>}
    </form>
  );
};

export default TaskForm;
