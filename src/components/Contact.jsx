import "./Contact.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    ritual: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
🙏 Namaste Guruji

👤 Name: ${formData.name}

📞 Mobile: ${formData.mobile}

🕉️ Ritual: ${formData.ritual}

📝 Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/919763260162?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      mobile: "",
      ritual: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* Section Header */}

        <div className="section-subtitle">
          <span></span>
          {t("contact.subtitle")}
          <span></span>
        </div>

        <h2 className="contact-title">
          {t("contact.title")}
          <span>{t("contact.titleHighlight")}</span>
        </h2>

        <p className="contact-description">
          {t("contact.description")}
        </p>

        <div className="contact-content">

          {/* Contact Info */}

          <div className="contact-info">

            <div className="contact-card">
              <Phone size={24} />

              <h3>{t("contact.callGuruji")}</h3>

              <a href="tel:+919763260162">
                +91 97632 60162
              </a>

              <a href="tel:+919765007770">
                +91 97650 07770
              </a>
            </div>

            <div className="contact-card">
              <MessageCircle size={24} />

              <h3>{t("contact.whatsapp")}</h3>

              <a
                href="https://wa.me/919763260162?text=Namaste Guruji, I would like guidance regarding rituals at Ramkund."
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.chatWhatsapp")}
              </a>
            </div>

            <div className="contact-card">
              <MapPin size={24} />

              <h3>{t("contact.locationTitle")}</h3>

              <p>
                {t("contact.location")}
                <br />
                {t("contact.city")}
              </p>
            </div>

            <div className="contact-card">
              <Clock size={24} />

              <h3>{t("contact.availability")}</h3>

              <p>
                {t("contact.daily")}
                <br />
                5:00 AM - 9:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder={t(
                "contact.namePlaceholder"
              )}
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder={t(
                "contact.mobilePlaceholder"
              )}
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <select
              name="ritual"
              value={formData.ritual}
              onChange={handleChange}
              required
            >
              <option value="">
                {t("contact.selectRitual")}
              </option>

              <option value={t("contact.pindDaan")}>
                {t("contact.pindDaan")}
              </option>

              <option value={t("contact.asthiVisarjan")}>
                {t("contact.asthiVisarjan")}
              </option>

              <option value={t("contact.dashakriya")}>
                {t("contact.dashakriya")}
              </option>

              <option value={t("contact.shraddha")}>
                {t("contact.shraddha")}
              </option>

              <option value={t("contact.narayanNagbali")}>
                {t("contact.narayanNagbali")}
              </option>

              <option value={t("contact.tripindi")}>
                {t("contact.tripindi")}
              </option>

              <option value={t("contact.pitruDosh")}>
                {t("contact.pitruDosh")}
              </option>

              <option value={t("contact.otherRitual")}>
                {t("contact.otherRitual")}
              </option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder={t(
                "contact.messagePlaceholder"
              )}
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              {t("contact.submit")}
            </button>
          </form>

        </div>

        {/* Google Map */}

        <div className="map-container">
          <iframe
            title="Ramkund Nashik"
            src="https://maps.google.com/maps?q=Ramkund%20Nashik&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}