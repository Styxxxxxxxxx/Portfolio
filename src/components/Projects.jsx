import { useEffect, useState } from 'react'
import brgyLogo from '../assets/brgy-santo-cristo-logo.png'
import './Projects.css'

function Projects() {
  const [visibleCards, setVisibleCards] = useState([])


  // Optional: Add intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target
            const index = parseInt(card.dataset.index)
            setVisibleCards(prev => [...new Set([...prev, index])])
            observer.unobserve(card)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('.pCard')
    cards.forEach((card, index) => {
      card.setAttribute('data-index', index)
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "eBarangaySantoCristo.com",
      description:
        "A Government Web Based digital platform for Barangay Santo Cristo.",
      badge: "Live Website",
      link: "https://ebarangaysantocristo.com",
      developer: "Mharl Jake Capuyan",
      role: "Frontend Developer",
      collaborator: "Nely Romero",
      collaboratorRole: "BackEnd Developer",
      techStack: ["TypeScript", "SCSS", "REST API", "Responsive Design"],
      featured: true,
      logo: brgyLogo,
    },
    {
      title: "Upcoming Projects #2",
      description:
        "New features and community-focused updates are in progress—stay tuned for more improvements and releases.",
      badge: "Upcoming",
      link: "#",
      developer: "Mharl Jake Capuyan",
      role: "Frontend Developer",
      collaborator: "Nely Romero",
      collaboratorRole: "BackEnd Developer",
      techStack: ["Planning", "UI/UX", "APIs", "Testing"],
      featured: false,
    },
    {
      title: "Upcoming Projects #3",
      description:
        "Additional enhancements are planned to improve performance, usability, and community engagement.",
      badge: "Upcoming",
      link: "#",
      developer: "Mharl Jake Capuyan",
      role: "Frontend Developer",
      collaborator: "Nely Romero",
      collaboratorRole: "BackEnd Developer",
      techStack: ["Performance", "Design", "APIs", "QA"],
      featured: false,
    },
  ]


  return (
    <section id="projects" className="pSection" aria-label="Projects">
      <div className="pInner">
        <div className="pHeader">
          <h2>Featured Projects</h2>
          <p>Transforming ideas into digital reality</p>
        </div>

        <div className="pGrid">
          {projects.map((project, index) => (
            <a
              key={index}
              className="pCard"
              href={project.link} 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <div className="pCardTop">
                <span className="pBadge">{project.badge}</span>
              </div>

              {project.logo && (
                <div className="pCardLogoWrap" aria-hidden="true">
                  <img className="pCardLogo" src={project.logo} alt="" />
                </div>
              )}

              <div className="pCardTitle">{project.title}</div>

              <div className="pCardDesc">{project.description}</div>
              
              {project.techStack && (
                <div className="pTechStack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="pTech">{tech}</span>
                  ))}
                </div>
              )}
              
              <div className="pCardMeta">
                <strong>Developer:</strong> {project.developer}
                <br />
                <strong>Role:</strong> {project.role}
                <br />
                <strong>Developer:</strong> {project.collaborator} ({project.collaboratorRole})
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects