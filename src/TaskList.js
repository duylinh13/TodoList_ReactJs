// TaskList.js
import React from "react";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

const TaskList = ({ tasks, handleDelete, handleEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task">
          <span>
            {task.name} - Level {task.level}
          </span>
          <div className="task-actions">
            <EditTask index={index} task={task} handleEdit={handleEdit} />
            <DeleteTask index={index} handleDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
