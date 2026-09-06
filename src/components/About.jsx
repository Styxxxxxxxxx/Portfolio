import { useEffect, useState, useCallback } from 'react'
import './About.css'

function About() {
  const slides = ['Education', 'Experience', 'Skills', 'Hobbies']
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setActive((i) => (i + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, slides.length])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setActive((i) => (i - 1 + slides.length) % slides.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating, slides.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        nextSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [prevSlide, nextSlide])

  const handleDotClick = (index) => {
    if (isAnimating || index === active) return
    setIsAnimating(true)
    setActive(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section id="about" className="aSection" aria-label="About">
      <div className="aInner">
        <div className="aHeader">
          <h2>About Me</h2>
          <p>Discover my journey, expertise, and passions</p>
        </div>

        <div className="aCarousel" aria-label="About slideshow">

          <div className="aCarouselViewport">
            <div 
              className="aCarouselTrack" 
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              <div className="aSlide" aria-label="Education">
                <div className="aCard">
                  <h3 className="aCardTitle">Education</h3>

                  <div className="aList" aria-label="Education list">
                    <div className="aItem">
                      <div className="aItemTop">
                        <div className="aItemTitle"> Senior Highschool | TVL - ICT</div>
                        <div className="aItemDates">S.Y. 2020 - 2022</div>
                      </div>
                      <div className="aItemMeta">
                         Tuburan National Highschool
                      </div>
                    </div>

                    <div className="aItem">
                      <div className="aItemTop">
                        <div className="aItemTitle"> Bachelor of Science in Information Technology</div>
                        <div className="aItemDates">2022 - 2026</div>
                      </div>
                      <div className="aItemMeta">
                         STI Colleges SJDM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aSlide" aria-label="Experience">
                <div className="aCard">
                  <h3 className="aCardTitle">Experience</h3>

                  <div className="aList" aria-label="Experience list">
                    <div className="aItem">
                      <div className="aItemTop">
                        <div className="aItemTitle">Data Entry Assistant</div>
                      </div>
                      <div className="aItemMeta">
                        Embassy
                      </div>
                    </div>

                    <div className="aItem">
                      <div className="aItemTop">
                        <div className="aItemTitle">Data Analyst Intern</div>
                      </div>
                      <div className="aItemMeta">
                        Evergreen Realty Philippines
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aSlide" aria-label="Skills">
                <div className="aCard">
                  <h3 className="aCardTitle">Technical Skills</h3>

                  <div className="aTags" aria-label="Skills list">
                    <span className="aTag">React.js</span>
                    <span className="aTag">Frontend Development</span>
                    <span className="aTag">Game Dev (2D)</span>
                    <span className="aTag">Java</span>
                    <span className="aTag">C# Basics</span>
                    <span className="aTag">Team Collaboration</span>
                    <span className="aTag">Agile Methodology</span>
                    <span className="aTag">Time Management</span>
                    <span className="aTag">Problem Solving</span>
                  </div>
                </div>
              </div>

              <div className="aSlide" aria-label="Hobbies">
                <div className="aCard">
                  <h3 className="aCardTitle">Passions & Interests</h3>

                  <div className="aTags" aria-label="Hobbies list">
                    <span className="aTag">Exploring new places</span>
                    <span className="aTag">Coffee enthusiast</span>
                    <span className="aTag">Mobile Legends</span>
                    <span className="aTag">Call of Duty Mobile</span>
                    <span className="aTag">Biking adventures</span>
                    <span className="aTag">Tech reading</span>
                    <span className="aTag">Music production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="aDots" aria-label="Slide indicators">
            {slides.map((label, i) => (
              <button
                key={label}
                type="button"
                className="aDot"
                data-active={i === active ? 'true' : 'false'}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to ${label} slide`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About