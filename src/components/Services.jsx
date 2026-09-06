import './Services.css'
import { useEffect } from 'react'

const services = [
  {
    label: 'Part-time support',
    price: '₱15,000',
    cadence: '/ month',
    description: 'Flexible frontend support for teams that need a reliable developer a few days each week.',
    features: ['Responsive UI development', 'Bug fixes and improvements', 'Weekly progress updates'],
  },
  {
    label: 'Project-based',
    price: '₱3,000',
    cadence: 'starting at',
    description: 'A focused frontend build for a landing page, portfolio, or small web experience.',
    features: ['Custom page implementation', 'Mobile-friendly layouts', 'Clean handoff and revisions'],
  },
]

function Services({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen, onClose])

  return (
    <>
      {isOpen && (
        <div className="sModalBackdrop" onClick={onClose}>
          <div
            className="sModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="services-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sModalHeader">
              <div>
                <p className="sEyebrow">Services & fees</p>
                <h2 id="services-modal-title">A clear place to start.</h2>
              </div>
              <button className="sClose" type="button" onClick={onClose} aria-label="Close services">
                ×
              </button>
            </div>

            <div className="sModalList">
              {services.map((service) => (
                <article className="sModalItem" key={service.label}>
                  <div className="sModalItemTop">
                    <h3>{service.label}</h3>
                    <div className="sModalPrice">{service.price} <span>{service.cadence}</span></div>
                  </div>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <a className="sModalCta" href="#contact" onClick={onClose}>
              Discuss your project <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Services
