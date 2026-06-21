import "./Services.css";

const services = [
  {
    title: "Dashakriya Vidhi",
    icon: "🕉️",
    description:
      "Traditional post-death rituals performed according to Hindu customs."
  },
  {
    title: "Pind Daan",
    icon: "🙏",
    description:
      "Sacred offering rituals dedicated to ancestors and departed souls."
  },
  {
    title: "Asthi Visarjan",
    icon: "🌊",
    description:
      "Guidance and arrangements for immersion of ashes at Ramkund."
  },
  {
    title: "Narayan Nagbali",
    icon: "🔱",
    description:
      "Special Vedic ritual performed for ancestral peace and karmic relief."
  },
  {
    title: "Tripindi Shraddha",
    icon: "🌼",
    description:
      "Ritual for satisfying unsatisfied ancestral souls and attaining blessings."
  },
  {
    title: "Pitru Dosh Puja",
    icon: "🪔",
    description:
      "Religious remedies performed for ancestral doshas."
  },
  {
    title: "Kalasarpa Shanti",
    icon: "🐍",
    description:
      "Traditional puja for relief from Kalasarpa Dosha."
  },
  {
    title: "Namawali Records",
    icon: "📜",
    description:
      "Guidance regarding ancestral family records preserved through generations."
  }
];

export default function Services() {
  return (
    <section id="service" className="services">
      <div className="services-container">

        <div className="section-subtitle">
          <span></span>
          OUR SERVICES
          <span></span>
        </div>

        <h2 className="services-title">
          Religious Services at
          <span> Ramkund, Nashik</span>
        </h2>

        <p className="services-description">
          Complete assistance and guidance for Vedic, ancestral and
          religious rituals performed according to traditional customs.
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