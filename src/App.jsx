import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/dashboard/DashboardMainContent'
import './index.css'

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <DashboardMainContent />
      </div>
    </div>
  )
}
