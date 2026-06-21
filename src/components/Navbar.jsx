import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setShowLanguages(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <div className="nav-logo">
        <div className="nav-logo-icon">RN</div>

        <div className="nav-logo-text">
          {t("logo.line1")} <span>{t("logo.highlight")}</span> {t("logo.line2")}
        </div>
      </div>

      {/* Navigation Links */}

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            {t("navbar.home")}
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("navbar.about")}
          </a>
        </li>

        <li>
          <a href="#service" onClick={() => setMenuOpen(false)}>
            {t("navbar.services")}
          </a>
        </li>

        <li>
          <a href="#simhastha" onClick={() => setMenuOpen(false)}>
            {t("navbar.simhastha")}
          </a>
        </li>

        <li>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            {t("navbar.faq")}
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("navbar.contact")}
          </a>
        </li>
      </ul>

      {/* Right Section */}

      <div className="nav-right">
        {/* Language Dropdown */}

        <div className="lang-switcher">
          <button
            className="lang-btn"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            🌐 {t("navbar.language")} ▼
          </button>

          {showLanguages && (
            <div className="lang-dropdown">
              <button
                className="lang-option"
                onClick={() => changeLanguage("en")}
              >
                English
              </button>

              <button
                className="lang-option"
                onClick={() => changeLanguage("mr")}
              >
                मराठी
              </button>

              <button
                className="lang-option"
                onClick={() => changeLanguage("hi")}
              >
                हिन्दी
              </button>

              <button
                className="lang-option"
                onClick={() => changeLanguage("gu")}
              >
                ગુજરાતી
              </button>

              <button
                className="lang-option"
                onClick={() => changeLanguage("te")}
              >
                తెలుగు
              </button>
            </div>
          )}
        </div>

        {/* Hamburger */}

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
}
