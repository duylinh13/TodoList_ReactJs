import React from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const TaskList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>
            {task.name} - {task.level}
          </span>
          <EditTask index={index} task={task} handleEdit={handleEdit} />
          <DeleteTask index={index} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
