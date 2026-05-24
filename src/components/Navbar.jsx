import './Navbar.css'

function Navbar() {
  return (
    <header className="nlHeader">
      <div className="nlBrand">
        <span className="nlBrandDot" aria-hidden="true">
          ●
        </span>
        <span className="nlBrandName">Slyxxx Portfolio</span>
      </div>

      <nav className="nlNav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar

