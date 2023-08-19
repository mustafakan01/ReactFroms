// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import TaskCreate from "./Component/TaskCreate"
import TaskList from "./Component/TaskList"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <TaskCreate></TaskCreate>
     <h1>Görevler</h1>
     <TaskList></TaskList>
    </div>
  )
}

export default App
