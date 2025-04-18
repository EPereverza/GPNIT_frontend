import React, { useState } from 'react'
import TaskDropdown, { Task } from '../components/TaskDropdown'
import TaskWindow from '../components/TaskWindow'
import CodeEditor from '../components/CodeEditor'
import './Desktop.css'



const Desktop: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isCodeOpen, setIsCodeOpen] = useState(false)

  return (
    <div className="desktop-container">
      <div className="taskbar">
        <button className="task-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>📂 Задачи</button>

        {selectedTask && (
          <>
          <button className="task-button" onClick={() => setSelectedTask(null)}>{selectedTask.title}</button>
          <button className="task-button" onClick={() => setIsCodeOpen(!isCodeOpen)}>💻 Код</button>
          </>
        )}
      </div>

      {isDropdownOpen && (
        <div className="dropdown-panel">
          <TaskDropdown
            onSelectTask={(task: Task) => {
              setSelectedTask(task)
              setIsDropdownOpen(false)
            }}
          />
        </div>
      )}

      {selectedTask && (
        <TaskWindow task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}

      {isCodeOpen && selectedTask && (
        <CodeEditor
          expectedSolution={selectedTask.solution}
          onClose={() => setIsCodeOpen(false)}
        />
      )}

    </div>
  )
}

export default Desktop




// import React, { useState, useEffect } from 'react'
// import TaskDropdown, { Task } from '../components/TaskDropdown'
// import TaskWindow from '../components/TaskWindow'
// import './Desktop.css'

// const Desktop: React.FC = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
//   const [selectedTask, setSelectedTask] = useState<Task | null>(null)
//   const [tasks, setTasks] = useState<Task[]>([])

//   useEffect(() => {
//     fetch('http://localhost:3000/tasks')
//       .then((res) => res.json())
//       .then((data: Task[]) => setTasks(data))
//   }, [])

//   return (
//     <div className="desktop-container">
//       <div className="taskbar">
//         <button
//           className="task-button"
//           onClick={() => setIsDropdownOpen((prev) => !prev)}
//         >
//           📂 Задачи
//         </button>
//         {selectedTask && (
//           <button className="task-button" onClick={() => setSelectedTask(null)}>
//             {selectedTask.title}
//           </button>
//         )}
//       </div>

//       {isDropdownOpen && (
//         <TaskDropdown
//         onSelectTask={(task: Task) => {
//           setSelectedTask(task)
//           setIsDropdownOpen(false)
//         }}
//       />
//       )}

//       {selectedTask && (
//         <TaskWindow task={selectedTask} onClose={() => setSelectedTask(null)} />
//       )}
//     </div>
//   )
// }

// export default Desktop


