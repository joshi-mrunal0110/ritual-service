import "./Contact.css";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Contact() {
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

        <div className="section-subtitle">
          <span></span>
          CONTACT US
          <span></span>
        </div>

        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>

        <p className="contact-description">
          Contact Shri Sagar Kshemkalyani for ritual guidance,
          bookings, and information regarding services at
          Ramkund, Nashik.
        </p>

        <div className="contact-content">

          {/* Contact Information */}

          <div className="contact-info">

            <div className="contact-card">
              <Phone size={24} />
              <h3>Call Guruji</h3>

              <a href="tel:+919763260162">
                +91 97632 60162
              </a>

              <a href="tel:+919765007770">
                +91 97650 07770
              </a>
            </div>

            <div className="contact-card">
              <MessageCircle size={24} />
              <h3>WhatsApp</h3>

              <a
                href="https://wa.me/919763260162?text=Namaste Guruji, I would like guidance regarding rituals at Ramkund."
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <MapPin size={24} />
              <h3>Location</h3>

              <p>
                Ramkund, Godavari Ghat
                <br />
                Nashik, Maharashtra
              </p>
            </div>

            <div className="contact-card">
              <Clock size={24} />
              <h3>Availability</h3>

              <p>
                Daily
                <br />
                5:00 AM - 9:00 PM
              </p>
            </div>

          </div>

          {/* Contact Form */}

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
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
              <option value="">Select Ritual</option>
              <option value="Pind Daan">Pind Daan</option>
              <option value="Asthi Visarjan">Asthi Visarjan</option>
              <option value="Dashakriya Vidhi">Dashakriya Vidhi</option>
              <option value="Shraddha Vidhi">Shraddha Vidhi</option>
              <option value="Narayan Nagbali">Narayan Nagbali</option>
              <option value="Tripindi Shraddha">Tripindi Shraddha</option>
              <option value="Pitru Dosh Nivaran">
                Pitru Dosh Nivaran
              </option>
              <option value="Other Ritual">
                Other Ritual
              </option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Inquiry on WhatsApp
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