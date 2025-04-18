import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import './TaskDropdown.css'

export interface Task {
  id: number
  title: string
  description: string
  solution: string
}

interface Props {
  onSelectTask: (task: Task) => void
}

const TaskDropdown: React.FC<Props> = ({ onSelectTask }) => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks')
        setTasks(response.data)
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error)
      }
    }

    fetchTasks()
  }, [])

  return (
    <div className="task-dropdown">
      {tasks.map(task => (
        <div key={task.id} className="task-button" onClick={() => onSelectTask(task)}>
          {task.title}
        </div>
      ))}
    </div>
  )
}

export default TaskDropdown



// import React, { useEffect, useState } from 'react'
// import api from '../api/axios'
// import './TaskDropdown.css'

// export interface Task {
//   id: number
//   title: string
//   description: string
// }

// interface Props {
//   onSelectTask: (task: Task) => void
// }

// const TaskDropdown: React.FC<Props> = ({ onSelectTask }) => {
//   const [tasks, setTasks] = useState<Task[]>([])

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await api.get('/tasks')
//         setTasks(response.data)
//       } catch (error) {
//         console.error('Ошибка при загрузке задач:', error)
//       }
//     }

//     fetchTasks()
//   }, [])

//   return (
//     <div className="task-dropdown">
//       {tasks.map(task => (
//         <div
//           key={task.id}
//           className="task-item"
//           onClick={() => onSelectTask(task)}
//         >
//           {task.title}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default TaskDropdown




// import React from 'react'
// import './TaskDropdown.css'

// export interface Task {
//   id: number
//   title: string
//   description: string
// }

// interface TaskDropdownProps {
//   tasks: Task[]
//   onTaskSelect: (task: Task) => void
// }

// const TaskDropdown: React.FC<TaskDropdownProps> = ({ tasks, onTaskSelect }) => {
//   return (
//     <div className="dropdown">
//       <p className="dropdown-title">Доступные задачи:</p>
//       <ul>
//         {tasks.map((task) => (
//           <li key={task.id} onClick={() => onTaskSelect(task)}>
//             {task.title}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default TaskDropdown
