import AnatomySection from './AnatomySection'
import HealthStatusCards from './HealthStatusCards'
import ActivityFeed from './ActivityFeed'
import CalendarView from './CalendarView'
import UpcomingSchedule from './UpcomingSchedule'
import './DashboardMainContent.css'
import Header from '../Header'

export default function DashboardMainContent() {
  return (
    <div className="dashboard-main-row">
      <div className="dashboard-left">
  <div className="left-search-bar">
    <input type="text" placeholder="Search..." />
  </div>

  <div className="top-left-group">
    <AnatomySection />
    <HealthStatusCards />
  </div>

  <ActivityFeed />
</div>


      <div className="dashboard-right">
        <Header />
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  )
}
