import { upcomingSchedule } from '../../data/appointments'
import SimpleAppointmentCard from './SimpleAppointmentCard'
import './UpcomingSchedule.css'

export default function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {upcomingSchedule.map((day, index) => (
        <div key={index} className="schedule-day">
          <h3>On {day.day}</h3>
          <div className="day-appointments">
            {day.appointments.map((appt, i) => (
              <SimpleAppointmentCard key={i} {...appt} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
