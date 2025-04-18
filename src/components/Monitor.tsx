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
        left: '8%',
        top: '28.5%',
        width: '395px',
        height: '265px',
        cursor: 'pointer',
        border: '2px solid white',
        borderRadius: '8px',
        backgroundColor: 'rgba(30, 175, 22, 0.1)',
      }}
      title="Нажми, чтобы погрузиться"
    />
  )
}

export default Monitor
