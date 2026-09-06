import './LandingPage.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


function LandingPage() {
  return (
    <div className="lpPage">
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <footer className="lpFooter">
        <div>© {new Date().getFullYear()} Slyxxx Portfolio. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default LandingPage


