import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <div className="nav-logo-icon">RN</div>

        <div className="nav-logo-text">
          Ranchod <span>Narayan</span> Kshemkalyani
        </div>
      </div>

      {/* Desktop Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>

        <li>
          <a href="#service" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>

         <li>
          <a href="#simhastha" onClick={() => setMenuOpen(false)}>
            Simhastha Kumbhmela 2027 
          </a>
        </li>

        <li>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <button className="lang-btn">EN ▼</button>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
