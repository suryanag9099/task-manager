import React, { useState } from "react"; 
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={({ target }) => setNewTask(target.value)} // Destructured event
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      )}
    </div>
  );
};

export default TaskManager;
