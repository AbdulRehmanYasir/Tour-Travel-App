import './Footer.css';

function Footer({ brand, links }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <h3>{brand}</h3>
          <p>Curating unforgettable journeys since 2017.</p>
        </div>

        <nav className="footer__links">
          {links.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href="#home" aria-label="Facebook">FB</a>
          <a href="#home" aria-label="Instagram">IG</a>
          <a href="#home" aria-label="Twitter">TW</a>
        </div>
      </div>

      <p className="footer__copy">© {year} {brand}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
