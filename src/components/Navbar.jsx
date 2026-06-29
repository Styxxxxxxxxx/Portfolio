import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="nlHeader">
        <div className="nlBrand">
          <span className="nlBrandDot">●</span>
          <span className="nlBrandName">Brand</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nlNav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#login" className="nlCta">Login</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="nlMenuBtn" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Overlay */}
      <div 
        className={`nlNavOverlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={closeMenu}
      />

      {/* Mobile Slide Menu */}
      <nav className={`nlMobileMenu ${isMenuOpen ? 'open' : ''}`}>
        <button 
          className="nlCloseBtn" 
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#login" className="nlCta" onClick={closeMenu}>Login</a>
      </nav>
    </>
  );
};

export default Navbar;