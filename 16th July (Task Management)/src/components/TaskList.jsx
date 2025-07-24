import React, { useState } from 'react';

function TaskList({ tasks, onDelete, onEdit, onStatusChange }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditData(task);
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const saveEdit = () => {
    onEdit(editData);
    setEditingId(null);
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                {editingId === task.id ? (
                  <>
                    <td>
                      <input
                        name="title"
                        value={editData.title}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <input
                        name="description"
                        value={editData.description}
                        onChange={handleEditChange}
                      />
                    </td>
                    <td>
                      <select
                        name="priority"
                        value={editData.priority}
                        onChange={handleEditChange}
                      >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </td>
                    <td>{task.status}</td>
                    <td>
                      <button onClick={saveEdit}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.priority}</td>
                    <td>
                      <select
                        value={task.status}
                        onChange={(e) => onStatusChange(task.id, e.target.value)}
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => startEdit(task)}>Edit</button>
                      <button onClick={() => onDelete(task.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TaskList;
