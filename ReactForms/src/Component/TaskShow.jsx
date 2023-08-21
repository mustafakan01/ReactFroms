/* eslint-disable react/prop-types */

import { useState } from "react";
import TaskCreate from "./TaskCreate";

// eslint-disable-next-line react/prop-types
function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSunmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate
          task={task}
          taskFormUpdate={true}
          onUpdate={handleSunmit}
        ></TaskCreate>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz!</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p className="task-title">{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
