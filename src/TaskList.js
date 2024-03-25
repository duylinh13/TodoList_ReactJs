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
            {/* Truyền task thay vì index và task */}
            <EditTask task={task} handleEdit={handleEdit} />
            <DeleteTask task={task} handleDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
