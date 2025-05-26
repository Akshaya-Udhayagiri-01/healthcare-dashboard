import { calendarAppointments } from '../../data/appointments'
import './CalendarView.css'

export default function CalendarView() {
  return (
    <section className="calendar-section">
      <h2>Calendar - February 2021</h2>
      <div className="calendar-grid">
        {[...Array(28)].map((_, index) => {
          const day = index + 1;
          const appointment = calendarAppointments.find(a => a.day === day);
          const hasAppointment = !!appointment;

          return (
            <div
              key={day}
              className={`calendar-day ${hasAppointment ? 'has-appointment' : ''}`}
            >
              <strong>{day}</strong>
              {appointment?.times.map((time, idx) => (
                <span key={idx} className="time-slot">{time}</span>
              ))}
            </div>
          );
        })}
      </div>

      {/* Static Appointment Cards */}
      <div className="appointment-cards">
        <div className="appointment-card">
          <h4>Dentist</h4>
          <p>23rd Feb — 09:00 AM</p>
        </div>
        <div className="appointment-card">
          <h4>Physiotherapy</h4>
          <p>25th Feb — 11:00 AM</p>
        </div>
      </div>
    </section>
  );
}
