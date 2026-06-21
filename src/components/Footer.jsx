import "./Footer.css";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-section">
          <h3 className="footer-logo">
            Ranchod Narayan <span>Kshemkalyani</span>
          </h3>

          <p>
            Traditional Vedic Ritual Services at Ramkund,
            Nashik. Serving families with devotion,
            authenticity, and guidance for over 20 years.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-section">
          <h4>Quick Links</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Guruji</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#simhastha">Simhastha 2027</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}

        <div className="footer-section">
          <h4>Services</h4>

          <ul>
            <li>Pind Daan</li>
            <li>Asthi Visarjan</li>
            <li>Shraddha Vidhi</li>
            <li>Dashakriya Vidhi</li>
            <li>Narayan Nagbali</li>
            <li>Tripindi Shraddha</li>
          </ul>
        </div>

        {/* Contact */}

        <div className="footer-section">
          <h4>Contact</h4>

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
                WhatsApp
              </a>
            </p>

            <p>
              <MapPin size={16} />
              Ramkund, Nashik
            </p>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">
        <p>
          © 2026 Ranchod Narayan Kshemkalyani.
          All Rights Reserved.
        </p>

        <p>
          Designed & Developed by <span>Mrunal Joshi</span>
        </p>
      </div>

    </footer>
  );
}