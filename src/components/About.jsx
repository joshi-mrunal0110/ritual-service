import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* Left Side - Image */}
        <div className="about-image-section">
          <div className="guruji-image-wrapper">
            <img
              src="src\assets\sagar-kshemkayani.jpeg"
              alt="Shri Sagar Kshemkalyani"
              className="guruji-image"
            />
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>20+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>5000+</h3>
              <p>Families Served</p>
            </div>

            <div className="stat-card">
              <h3>4</h3>
              <p>Regional Traditions</p>
            </div>

            <div className="stat-card">
              <h3>8+</h3>
              <p>Ritual Services</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="about-content">

          <div className="section-subtitle">
            <span></span>
            ABOUT GURUJI
            <span></span>
          </div>

          <h2 className="about-title">
            Shri Sagar Kshemkalyani
          </h2>

          <h3 className="about-location">
            Ramkund Teerth Purohit, Nashik
          </h3>

          <p>
            With over <strong>20 years of experience</strong>, Shri
            <strong> Sagar Kshemkalyani </strong>
            has been serving families at the sacred
            <strong> Ramkund on the banks of the holy Godavari River in Nashik</strong>,
            guiding them through religious rituals with devotion,
            authenticity, and respect for tradition.
          </p>

          <p>
            He specializes in a wide range of Vedic and ancestral ceremonies
            including <strong>Dashakriya Vidhi, Pind Daan,
            Asthi Visarjan, Shraddha Vidhi, Narayan Nagbali,
            Tripindi Shraddha, Pitru Dosh Nivaran </strong>
            and other religious rituals performed according to
            traditional customs.
          </p>

          <p>
            One of the unique services offered is access to and guidance
            regarding <strong>ancestral family records
            (Namawali / Namolya)</strong> preserved through generations,
            helping families trace and maintain their sacred lineage
            and heritage.
          </p>

          <p>
            Guruji has extensive experience serving families belonging
            to the traditions of
            <strong> Maharashtra, Uttar Pradesh, Gujarat and Telugu communities</strong>,
            ensuring that rituals are conducted according to the
            specific customs and religious practices followed by
            each family.
          </p>

          <p>
            Known for his sincerity, knowledge of scriptures and
            compassionate guidance, Shri Sagar Kshemkalyani has earned
            the trust of thousands of families over the years.
          </p>

          <div className="community-tags">
            <span>Maharashtra</span>
            <span>Uttar Pradesh</span>
            <span>Gujarat</span>
            <span>Telugu Community</span>
          </div>


        </div>
      </div>
    </section>
  );
}