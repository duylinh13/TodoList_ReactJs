import React, { useState, useEffect } from "react";

const EditTask = ({ selectedTask, handleEdit }) => {
  const [task, setTask] = useState({ name: "", level: "1" });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
      />
      <select name="level" value={task.level} onChange={handleChange}>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditTask;
