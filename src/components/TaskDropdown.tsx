import React from 'react'
import './TaskDropdown.css'

export interface Task {
  id: number
  title: string
  description: string
}

interface TaskDropdownProps {
  tasks: Task[]
  onTaskSelect: (task: Task) => void
}

const TaskDropdown: React.FC<TaskDropdownProps> = ({ tasks, onTaskSelect }) => {
  return (
    <div className="dropdown">
      <p className="dropdown-title">Доступные задачи:</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onTaskSelect(task)}>
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskDropdown
