import React, { useState } from 'react'
import { Task } from './TaskDropdown'
import './TaskWindow.css'

interface TaskWindowProps {
  task: Task
  onClose: () => void
}

const TaskWindow: React.FC<TaskWindowProps> = ({ task, onClose }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState({ x: 200, y: 200 })

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({ x: e.clientX - 100, y: e.clientY - 20 })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <div
      className="task-window"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="window-header">
        <span>{task.title}</span>
        <button onClick={onClose}>×</button>
      </div>
      <div className="window-content">{task.description}</div>
    </div>
  )
}

export default TaskWindow



// import React, { useState } from 'react'
// import { Task } from './TaskDropdown'
// import './TaskWindow.css'

// interface TaskWindowProps {
//   task: Task
//   onClose: () => void
// }

// const TaskWindow: React.FC<TaskWindowProps> = ({ task, onClose }) => {
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [position, setPosition] = useState({ x: 100, y: 100 })
//   const [dragging, setDragging] = useState(false)
//   const [rel, setRel] = useState({ x: 0, y: 0 })

//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setDragging(true)
//     setRel({
//       x: e.pageX - position.x,
//       y: e.pageY - position.y,
//     })
//     e.preventDefault()
//   }

//   const handleMouseUp = () => {
//     setDragging(false)
//   }

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!dragging) return
//     setPosition({
//       x: e.pageX - rel.x,
//       y: e.pageY - rel.y,
//     })
//   }

//   return (
//     <div
//       className="task-window"
//       style={{ top: position.y, left: position.x }}
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//     >
//       <div className="window-header" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
//         <span>{task.title}</span>
//         <div className="window-buttons">
//           <button onClick={() => setIsMinimized(!isMinimized)}>_</button>
//           <button onClick={onClose}>X</button>
//         </div>
//       </div>
//       {!isMinimized && <div className="window-content">{task.description}</div>}
//     </div>
//   )
// }

// export default TaskWindow
