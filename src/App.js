import React, { useState } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import "./index.css"; // Import your CSS file

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [sortType, setSortType] = useState("name");

  const handleAdd = (task) => {
    setTasks([...tasks, task]);
    sortTasks(sortType); // Sắp xếp lại danh sách sau khi thêm
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEdit = (index, editedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
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
          <TaskList
            tasks={filteredTasks.length ? filteredTasks : tasks}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
