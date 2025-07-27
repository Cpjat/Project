import React from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task-item">
      <span>{task.title}</span>
      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
