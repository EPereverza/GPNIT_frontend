// src/components/Monitor.tsx
import React from 'react'

type MonitorProps = {
  onClick: () => void
}

const Monitor: React.FC<MonitorProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '40%',
        top: '45%',
        width: '120px',
        height: '90px',
        cursor: 'pointer',
        border: '2px solid white',
        borderRadius: '8px',
        backgroundColor: 'rgba(255,255,255,0.1)',
      }}
      title="Нажми, чтобы погрузиться"
    />
  )
}

export default Monitor
