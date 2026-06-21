import { Phone, MessageCircle, Globe, Award, Landmark } from "lucide-react";
import "./Home.css";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-container">
        {/* Left Content */}
        <div className="home-content">
          {/*<div className="om-symbol">ॐ</div>*/}

          {/*<div className="subtitle">
            <span></span>
            SACRED RITUALS • NASHIK
            <span></span>
          </div>*/}

          <h1 className="hero-title">
            Ranchod Narayan
            <br />
            <span>Kshemkalyani</span>
          </h1>

          <h3 className="hero-tagline">
            Religious Ritual Services at Nashik's Sacred Godavari Ghats
          </h3>

          <p className="hero-description">
            We guide families with deep reverence and compassion through sacred
            post-death rituals on the holy banks of the Godavari River. Every
            ceremony is performed with authenticity, care, and spiritual
            dignity.
          </p>

          <div className="hero-buttons">
            {/* Call Button 1 */}
            <a href="tel:+919763260162" className="call-btn">
              <Phone size={18} />
              Call
            </a>

            {/* Call Button 2
            <a href="tel:+919765007770" className="call-btn secondary-call">
              <Phone size={18} />
              Call 9765007770
            </a>*/}

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919763260162?text=Hello%20I%20need%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            {/* View Services */}
            <a href="#service" className="services-btn">
              View Services
            </a>
          </div>

          <div className="hero-features">
            <div className="feature">
              <Globe size={28} />
              <span>Marathi, Hindi, Gujarati & More</span>
            </div>

            <div className="feature">
              <Award size={28} />
              <span>25+ Years of Experience</span>
            </div>

            <div className="feature">
              <Landmark size={28} />
              <span>Godavari Ghat Rituals</span>
            </div>
          </div>
        </div>

        {/* Right Image 
        <div className="home-image">
          <img
            src="src\assets\ramkund-image.jpg"
            alt="Ramkund Nashik"
          />
        </div>*/}
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
