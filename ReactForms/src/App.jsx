// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import './App.css'

import TaskCreate from "./Component/TaskCreate"
import TaskList from "./Component/TaskList"
import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const [tasks, setTasks] = useState([])

  const createTask=(title,taskDesc)=>{
   const createdTasks=[
    ...tasks,{
      id:Math.round(Math.random()*9999999),
      title,
      taskDesc
    }
   ];

   setTasks(createdTasks);
}
  return (
    <div className="App">
     <TaskCreate onCreate={createTask}></TaskCreate>
     <h1>Görevler</h1>
     <TaskList tasks={tasks}></TaskList>
    </div>
  )
}

export default App
