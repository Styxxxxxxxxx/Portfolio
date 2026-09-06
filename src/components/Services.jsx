import './Services.css'

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
    price: '₱8,000',
    cadence: 'starting at',
    description: 'A focused frontend build for a landing page, portfolio, or small web experience.',
    features: ['Custom page implementation', 'Mobile-friendly layouts', 'Clean handoff and revisions'],
  },
]

function Services() {
  return (
    <section id="services" className="sSection" aria-label="Services and fees">
      <div className="sHeader">
        <p className="sEyebrow">Services & fees</p>
        <h2>Frontend development that fits the work.</h2>
        <p className="sIntro">
          Choose ongoing support or a focused build. Every fee starts with a quick conversation about your scope.
        </p>
      </div>

      <div className="sGrid">
        {services.map((service) => (
          <article className="sCard" key={service.label}>
            <div className="sCardTop">
              <h3>{service.label}</h3>
              <span className="sPriceNote">{service.cadence}</span>
            </div>
            <div className="sPrice">{service.price}</div>
            <p className="sDescription">{service.description}</p>
            <ul className="sFeatures">
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <a className="sCta" href="#contact">Discuss your project <span aria-hidden="true">→</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
