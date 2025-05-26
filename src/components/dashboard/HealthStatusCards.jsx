import { healthCards } from '../../data/healthData'
import './HealthStatusCards.css'

export default function HealthStatusCards() {
  return (
    <section className="health-cards">
      {healthCards.map((card, index) => (
        <div className="health-card" key={index}>
          <h3>{card.title}</h3>
          <p>{card.date}</p>
          <span className="status" style={{ backgroundColor: card.statusColor }}>
            {card.status}
          </span>
        </div>
      ))}
    </section>
  )
}
