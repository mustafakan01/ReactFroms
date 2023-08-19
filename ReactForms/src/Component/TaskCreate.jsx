function TaskCreate() {
    return ( 
    <div className="task-create">
    <h3>Lütfen Task Ekleyin!</h3>
    <form className="task-form">
        <label>Başlık</label>
        <input type="text" />
        <label>Task Giriniz!</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Oluştur</button>

    </form>
    </div>
    
    );
}

export default TaskCreate;