import { Phone, MessageCircle, Globe, Award, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Home.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="home">
      <div className="home-container">

        {/* Left Content */}

        <div className="home-content">

          <h1 className="hero-title">
            {t("home.titleLine1")}
            <br />
            <span>{t("home.titleLine2")}</span>
          </h1>

          <h3 className="hero-tagline">
            {t("home.tagline")}
          </h3>

          <p className="hero-description">
            {t("home.description")}
          </p>

          <div className="hero-buttons">

            {/* Call Button */}

            <a
              href="tel:+919763260162"
              className="call-btn"
            >
              <Phone size={18} />
              {t("home.call")}
            </a>

            {/* WhatsApp Button */}

            <a
              href="https://wa.me/919763260162?text=Hello%20I%20need%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} />
              {t("home.whatsapp")}
            </a>

            {/* View Services */}

            <a
              href="#service"
              className="services-btn"
            >
              {t("home.services")}
            </a>

          </div>

          <div className="hero-features">

            <div className="feature">
              <Globe size={28} />
              <span>{t("home.feature1")}</span>
            </div>

            <div className="feature">
              <Award size={28} />
              <span>{t("home.feature2")}</span>
            </div>

            <div className="feature">
              <Landmark size={28} />
              <span>{t("home.feature3")}</span>
            </div>

          </div>
        </div>

        {/* Optional Image Section */}

        {/*
        <div className="home-image">
          <img
            src="/images/ramkund-image.jpg"
            alt="Ramkund Nashik"
          />
        </div>
        */}

      </div>

      {/* Floating WhatsApp */}

      <a
        href="https://wa.me/919763260162?text=Hello%20I%20need%20information%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <MessageCircle size={30} />
      </a>

    </section>
  );
}