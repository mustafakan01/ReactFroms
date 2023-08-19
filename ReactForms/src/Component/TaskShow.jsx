/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function TaskShow({task}) {
    console.log(task);
    return ( <div className="task-show">
      <h3 className="task-title">Göreviniz!</h3>
      <p>{task.title}</p>
      <h3>Yapılacaklar</h3>
      <p className="task-title">{task.taskDesc}</p>
      <div>
        <button className="task-delete" >Sil</button>
        <button className="task-edit">Güncelle</button>
      </div>
    </div> );
}

export default TaskShow;