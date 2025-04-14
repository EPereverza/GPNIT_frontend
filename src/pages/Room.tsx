// src/pages/Room.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Monitor from '../components/Monitor'
import './Room.css'

const Room = () => {
  const navigate = useNavigate()

  const handleMonitorClick = () => {
    // При клике на монитор — переходим в экран задач
    navigate('/desktop')
  }

  return (
    <div className="room-container">
      <Monitor onClick={handleMonitorClick} />
    </div>
  )
}

export default Room
