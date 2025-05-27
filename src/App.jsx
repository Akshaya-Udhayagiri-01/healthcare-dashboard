import { useState } from 'react'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/dashboard/DashboardMainContent'
import './index.css'

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-container">
      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        ☰
      </button>

      <Sidebar className={`sidebar ${isSidebarOpen ? 'open' : ''}`} />

      <div className="main-content">
        <DashboardMainContent />
      </div>
    </div>
  )
}
