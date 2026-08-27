import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar({ links, brand }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          {brand}
        </a>

        <nav className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <a key={link.id} href={link.href} className="navbar__link" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={closeMenu}>
            Book Now
          </a>
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
