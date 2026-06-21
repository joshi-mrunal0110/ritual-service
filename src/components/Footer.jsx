import "./Footer.css";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-section">
          <h3 className="footer-logo">
            {t("footer.logo")}
            <span>{t("footer.logoHighlight")}</span>
          </h3>

          <p>
            {t("footer.description")}
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h4>{t("footer.quickLinks")}</h4>

          <ul>
            <li><a href="#home">{t("footer.home")}</a></li>
            <li><a href="#about">{t("footer.about")}</a></li>
            <li><a href="#service">{t("footer.services")}</a></li>
            <li><a href="#simhastha">{t("footer.simhastha")}</a></li>
            <li><a href="#faq">{t("footer.faq")}</a></li>
            <li><a href="#contact">{t("footer.contact")}</a></li>
          </ul>
        </div>

        {/* Services */}

        <div className="footer-section">
          <h4>{t("footer.servicesTitle")}</h4>

          <ul>
            <li>{t("footer.pindDaan")}</li>
            <li>{t("footer.asthiVisarjan")}</li>
            <li>{t("footer.shraddha")}</li>
            <li>{t("footer.dashakriya")}</li>
            <li>{t("footer.narayanNagbali")}</li>
            <li>{t("footer.tripindi")}</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-section">
          <h4>{t("footer.contactTitle")}</h4>

          <div className="footer-contact">

            <p>
              <Phone size={16} />
              <a href="tel:+919763260162">
                +91 97632 60162
              </a>
            </p>

            <p>
              <Phone size={16} />
              <a href="tel:+919765007770">
                +91 97650 07770
              </a>
            </p>

            <p>
              <MessageCircle size={16} />
              <a
                href="https://wa.me/919763260162"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.whatsapp")}
              </a>
            </p>

            <p>
              <MapPin size={16} />
              {t("footer.location")}
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">
        <p>
          {t("footer.copyright")}
        </p>

        <p>
          {t("footer.developedBy")} <span>Mrunal Joshi</span>
        </p>
      </div>

    </footer>
  );
}