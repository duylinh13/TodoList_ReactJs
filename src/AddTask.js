import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTask = ({ handleAdd, selectedTask }) => {
  const [task, setTask] = useState(selectedTask || { name: "", level: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(task);
    setTask({ name: "", level: "1" });
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          placeholder="Task name"
        />
        <select name="level" value={task.level} onChange={handleChange}>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
