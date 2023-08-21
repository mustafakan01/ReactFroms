// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

import TaskCreate from "./Component/TaskCreate";
import TaskList from "./Component/TaskList";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        title,
        taskDesc,
      },
    ];

    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTask = tasks.filter((tasks) => {
      return tasks.id !== id;
    });
    setTasks(afterDeletingTask);
  };
  const editTaskById = (id,updatedTitle,updatedTaskDesc) => {
    // eslint-disable-next-line no-unused-vars
    const updatedTask = tasks.map((task) => {
      if (task.id==id) {
        return {id, title: updatedTitle, taskDesc: updatedTaskDesc};
      }
      return tasks;
    });
    setTasks(updatedTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}></TaskCreate>
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      ></TaskList>
    </div>
  );
}

export default App;
