// DeleteTask.js
import React from "react";

const DeleteTask = ({ task, handleDelete }) => {
  const handleClick = () => {
    handleDelete(task);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteTask;
