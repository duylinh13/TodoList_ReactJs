// AddTask.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AddTask = ({ handleAdd }) => {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("1");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({ name, level });
    setName("");
    setLevel("1");
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task name"
        />
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
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
