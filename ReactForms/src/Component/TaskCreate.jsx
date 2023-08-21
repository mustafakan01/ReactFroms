import { useState } from "react";

// eslint-disable-next-line react/prop-types
function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  // eslint-disable-next-line react/prop-types
  const [title, setTitle] = useState(task ? task.title : "");
  // eslint-disable-next-line react/prop-types
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskFormUpdate) {
      // eslint-disable-next-line react/prop-types
      onUpdate(task.id, title, taskDesc);
    }
    else{
        onCreate(title, taskDesc);
    }
    
    setTitle("");
    taskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Taskı Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Güncelle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyin!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Task Giriniz!</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
