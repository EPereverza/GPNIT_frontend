// src/pages/TaskScreen.tsx
import React from 'react'

const TaskScreen = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'lime',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontFamily: 'monospace'
    }}>
      <p>Вы в системе. Получена задача: оптимизировать добычу нефти...</p>
    </div>
  )
}

export default TaskScreen
