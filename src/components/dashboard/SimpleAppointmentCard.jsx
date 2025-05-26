import './SimpleAppointmentCard.css'

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  )
}
