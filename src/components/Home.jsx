import { useEffect, useState, useRef } from 'react'
import './Home.css'

function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  
  // Typing animation effect for the h2 text
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Also called Slyxxx, A 21yrs old Web designer and developer who loves building things and trying something new.'
  const [isTyping, setIsTyping] = useState(true)
  
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  // Typing animation
  useEffect(() => {
    if (!isTyping) return
    
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        setIsTyping(false)
        clearInterval(timer)
      }
    }, 30)
    
    return () => clearInterval(timer)
  }, [isTyping])
  
  // Smooth scroll function
  const smoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
  
  return (
    <section 
      id="home" 
      className={`hSection ${isVisible ? 'visible' : ''}`} 
      aria-label="Home"
      ref={sectionRef}
    >
      <div className="hInner">
        <div className="hCopy">
          <h1>
            Hi! I'm <span className="hAccent">Mharl Jake Capuyan</span>
          </h1>
          <h2>
            {displayText}
            {isTyping && <span className="hCursor">|</span>}
          </h2>
          
          <p className="hTagline">
            No experience | 1 projects delivered |  Creative problem solver
          </p>

          <div className="hActions">
            <a 
              className="hBtn hBtnPrimary" 
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
            >
              Request a demo
            </a>
            <a 
              className="hBtn hBtnGhost" 
              href="#projects"
              onClick={(e) => smoothScroll(e, '#projects')}
            >
              See my work
            </a>
          </div>
          
          <div className="hSocial">
            <a href="https://github.com/Styxxxxxxxxx" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.72-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mharl-jake-033811372/?skipRedirect=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:Mharljake7@gmail.com" aria-label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="hCard" aria-hidden="true">
          <div className="hCardTop">
            <div className="hDots">
              <span />
              <span />
              <span />
            </div>
            <div className="hCardTitle">portfolio_preview.exe</div>
          </div>
          <div className="hCardBody">
            <div className="hSkeletonLine" />
            <div className="hSkeletonLine hSkeletonLineShort" />
            <div className="hSkeletonGrid">
              <div className="hSkeletonBox" />
              <div className="hSkeletonBox" />
              <div className="hSkeletonBox" />
            </div>
            <div className="hSkeletonCTA" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home