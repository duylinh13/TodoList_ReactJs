import React, { useState } from "react";

const EditTask = ({ index, task, handleEdit }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(index, editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editedTask.name}
        onChange={handleChange}
      />
      <select name="level" value={editedTask.level} onChange={handleChange}>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditTask;
