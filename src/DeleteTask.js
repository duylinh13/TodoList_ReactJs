import React from "react";

const DeleteTask = ({ index, handleDelete }) => {
  const handleClick = () => {
    handleDelete(index);
  };

  return <button onClick={handleClick}>Delete</button>;
};

export default DeleteTask;
