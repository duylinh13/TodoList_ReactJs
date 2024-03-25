import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import "./index.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [sortType, setSortType] = useState("name");
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAdd = (task) => {
    setTasks([...tasks, task]);
    sortTasks(sortType);
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null); // Ẩn form chỉnh sửa sau khi chỉnh sửa thành công
    sortTasks(sortType);
  };

  const handleSearch = (searchTerm) => {
    const filtered = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  const handleSortChange = (sortType) => {
    setSortType(sortType);
    sortTasks(sortType);
  };

  const sortTasks = (sortType) => {
    const sortedTasks = [...tasks];
    if (sortType === "name") {
      sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "level") {
      sortedTasks.sort((a, b) => a.level - b.level);
    }
    setFilteredTasks(sortedTasks);
  };

  const handleEditClick = (task) => {
    setSelectedTask(task); // Hiển thị form chỉnh sửa khi nhấp vào nút chỉnh sửa
  };

  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-md-12">
          <div className="sort-options">
            <label>Sort by:</label>
            <select
              value={sortType}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="level">Level</option>
            </select>
          </div>
          <SearchBar handleSearch={handleSearch} />
          <AddTask handleAdd={handleAdd} />
          {selectedTask && (
            <EditTask
              selectedTask={selectedTask}
              handleEdit={handleEdit}
              setSelectedTask={setSelectedTask}
            />
          )}
          <TaskList
            tasks={filteredTasks.length ? filteredTasks : tasks}
            handleDelete={handleDelete}
            handleEditClick={handleEditClick} // Truyền hàm để xử lý khi người dùng nhấp vào nút chỉnh sửa
          />
        </div>
      </div>
    </div>
  );
};

export default App;
