import './LandingPage.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useState } from 'react'


function LandingPage() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <div className="lpPage">
      <Navbar onServicesClick={() => setIsServicesOpen(true)} />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Services isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
      <footer className="lpFooter">
        <div>© {new Date().getFullYear()} Slyxxx Portfolio. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default LandingPage


