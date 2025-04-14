// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Room from './pages/Room'
import TaskScreen from './pages/TaskScreen'
import Desktop from './pages/Desktop'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/tasks" element={<TaskScreen />} />
        <Route path="/desktop" element={<Desktop />} />
      </Routes>
    </Router>
  )
}

export default App
