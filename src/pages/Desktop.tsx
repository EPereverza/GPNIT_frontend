import React, { useState, useEffect } from 'react'
import TaskDropdown, { Task } from '../components/TaskDropdown'
import TaskWindow from '../components/TaskWindow'
import './Desktop.css'

const Desktop: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((res) => res.json())
      .then((data: Task[]) => setTasks(data))
  }, [])

  return (
    <div className="desktop-container">
      <div className="taskbar">
        <button
          className="task-button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          📂 Задачи
        </button>
        {selectedTask && (
          <button className="task-button" onClick={() => setSelectedTask(null)}>
            {selectedTask.title}
          </button>
        )}
      </div>

      {isDropdownOpen && (
        <TaskDropdown
          tasks={tasks}
          onTaskSelect={(task: Task) => {
            setSelectedTask(task)
            setIsDropdownOpen(false)
          }}
        />
      )}

      {selectedTask && (
        <TaskWindow task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  )
}

export default Desktop
