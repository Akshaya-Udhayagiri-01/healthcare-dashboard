import { anatomyData } from '../../data/healthData'
import './AnatomySection.css'

export default function AnatomySection() {
  return (
    <section className="anatomy-section">
      <div className="image-wrapper">
        <img src="/assets/body.png" alt="Human Body" />
        {anatomyData.map((part, index) => (
          <span
            key={index}
            className="health-tag"
            style={{
              top: part.top,
              left: part.left,
              backgroundColor: part.color,
            }}
          >
            {part.name}
          </span>
        ))}
      </div>
    </section>
  )
}
