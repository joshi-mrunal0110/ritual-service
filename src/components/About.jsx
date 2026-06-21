import "./About.css";
import { useTranslation } from "react-i18next";
import gurujiImage from "../assets/sagar-kshemkayani.jpeg";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Left Side - Image */}

        <div className="about-image-section">
          <div className="guruji-image-wrapper">
            <img
              src={gurujiImage}
              alt={t("about.title")}
              className="guruji-image"
            />
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>20+</h3>
              <p>{t("about.experience")}</p>
            </div>

            <div className="stat-card">
              <h3>5000+</h3>
              <p>{t("about.families")}</p>
            </div>

            <div className="stat-card">
              <h3>4</h3>
              <p>{t("about.traditions")}</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>{t("about.services")}</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}

        <div className="about-content">

          <div className="section-subtitle">
            <span></span>
            {t("about.subtitle")}
            <span></span>
          </div>

          <h2 className="about-title">
            {t("about.title")}
          </h2>

          <h3 className="about-location">
            {t("about.location")}
          </h3>

          <p>{t("about.paragraph1")}</p>

          <p>{t("about.paragraph2")}</p>

          <p>{t("about.paragraph3")}</p>

          <p>{t("about.paragraph4")}</p>

          <p>{t("about.paragraph5")}</p>

          <div className="community-tags">
            <span>{t("about.tag1")}</span>
            <span>{t("about.tag2")}</span>
            <span>{t("about.tag3")}</span>
            <span>{t("about.tag4")}</span>
          </div>

        </div>

      </div>
    </section>
  );
}