import "./Services.css";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.dashakriyaTitle"),
      icon: "🕉️",
      description: t("services.dashakriyaDesc")
    },
    {
      title: t("services.pindDaanTitle"),
      icon: "🙏",
      description: t("services.pindDaanDesc")
    },
    {
      title: t("services.asthiTitle"),
      icon: "🌊",
      description: t("services.asthiDesc")
    },
    {
      title: t("services.narayanTitle"),
      icon: "🔱",
      description: t("services.narayanDesc")
    },
    {
      title: t("services.tripindiTitle"),
      icon: "🌼",
      description: t("services.tripindiDesc")
    },
    {
      title: t("services.pitruTitle"),
      icon: "🪔",
      description: t("services.pitruDesc")
    },
    {
      title: t("services.kalasarpaTitle"),
      icon: "🐍",
      description: t("services.kalasarpaDesc")
    },
    {
      title: t("services.namawaliTitle"),
      icon: "📜",
      description: t("services.namawaliDesc")
    }
  ];

  return (
    <section id="service" className="services">
      <div className="services-container">

        <div className="section-subtitle">
          <span></span>
          {t("services.subtitle")}
          <span></span>
        </div>

        <h2 className="services-title">
          {t("services.title")}
          <span>{t("services.titleHighlight")}</span>
        </h2>

        <p className="services-description">
          {t("services.description")}
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}