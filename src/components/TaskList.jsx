import React, { useState } from "react";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditedText(task.text); // Populate input with the existing task text
  };

  const handleSaveClick = () => {
    updateTask(editingTaskId, editedText); // Call the update function
    setEditingTaskId(null); // Exit edit mode
    setEditedText("");
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          {editingTaskId === task.id ? (
            <div className="edit-mode">
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setEditingTaskId(null)}>Cancel</button>
            </div>
          ) : (
            <div className="view-mode">
              <span>{task.text}</span>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
