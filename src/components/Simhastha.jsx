import "./Simhastha.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import kumbh1 from "../assets/kumbh1.jpg";
import kumbh2 from "../assets/kumbh2.jpg";
import kumbh3 from "../assets/kumbh3.jpg";
import kumbh4 from "../assets/kumbh4.jpg";
import kumbh5 from "../assets/kumbh5.jpg";
import kumbh6 from "../assets/kumbh6.jpg";
import kumbh7 from "../assets/kumbh7.jpg";

export default function Simhastha() {
  const targetDate = new Date("2027-08-02T00:00:00");

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();

      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),

        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

        minutes: Math.floor((difference / (1000 * 60)) % 60),

        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const shahiSnan = [
    {
      title: "🚩 Dhwajarohan",
      date: "31 October 2026",
    },

    {
      title: "🔱 First Shahi Snan",
      date: "02 August 2027",
    },

    {
      title: "🌊 Second Shahi Snan",
      date: "31 August 2027",
    },

    {
      title: "🕉️ Third Shahi Snan",
      date: "11 September 2027",
    },
  ];

  const parvaSnan = [
    "05 September 2027 - Rishi Panchami",
    "11 September 2027 - Bhadrapad Shukla Ekadashi",
    "15 September 2027 - Bhadrapad Shukla Purnima",
    "26 September 2027 - Bhadrapad Krishna Chaturdashi",
    "30 September 2027 - Bhadrapad Krishna Amavasya",

    "13 October 2027 - Ashwin Shukla Ekadashi",
    "15 October 2027 - Ashwin Shukla Purnima",
    "25 October 2027 - Ashwin Vad Ekadashi",

    "10 November 2027 - Kartik Shukla Ekadashi",
    "14 November 2027 - Kartik Shukla Purnima",
    "24 November 2027 - Kartik Vad Ekadashi",
    "28 November 2027 - Kartik Vad Amavasya",

    "09 December 2027 - Margashirsha Shukla Ekadashi",
    "13 December 2027 - Margashirsha Purnima",
    "19 December 2027 - Margashirsha Amavasya (Somvati Amavasya)",

    "16 January 2028 - Mauni Amavasya",

    "17 January 2028 - Magh Shukla Pratipada to 12 February 2028",
    "05 February 2028 - Ganga Godavari Mahotsav",

    "09 February 2028 - Magh Shukla Panchami",
    "10 February 2028 - Magh Shukla Ekadashi",
    "20 February 2028 - Magh Shukla Purnima",
    "20 February 2028 - Magh Krishna Ekadashi",

    "21 February 2028 - Magh Krishna Bhagavat Ekadashi",
    "25 February 2028 - Magh Vad Amavasya",
    "29 February 2028 - Magh Krishna Dnyaneshwari Mahashivratri",

    "07 March 2028 - Phalgun Shukla Ekadashi",
    "22 March 2028 - Phalgun Vad Ekadashi",

    "05 April 2028 - Chaitra Shukla Ekadashi",
    "09 April 2028 - Chaitra Shukla Purnima",
    "24 April 2028 - Chaitra Vad Amavasya",

    "08 May 2028 - Vaishakh Shukla Ekadashi",
    "08 May 2028 - Vaishakh Shukla Purnima",
    "20 May 2028 - Vaishakh Vad Ekadashi",
    "23 May 2028 - Vaishakh Vad Amavasya",

    "25 May 2028 - 02 June 2028 - Jyeshtha Shukla Dashahara",
    "03 June 2028 - Jyeshtha Shukla Ekadashi",
    "07 June 2028 - Jyeshtha Shukla Purnima",
    "18 June 2028 - Jyeshtha Vad Ekadashi",
    "22 June 2028 - Jyeshtha Vad Amavasya",

    "02 July 2028 - Ashadh Shukla Ekadashi",
    "06 July 2028 - Ashadh Shukla Purnima",
    "18 July 2028 - Ashadh Vad Ekadashi",
    "22 July 2028 - Ashadh Krishna Trayodashi",

    "Simhastha Samapti Dashami - 31 July to 06 August 2028",
  ];

  return (
    <section id="simhastha" className="simhastha">
      <div className="simhastha-container">
        <div className="section-subtitle">
          <span></span>
          SIMHASTHA KUMBH MELA 2027
          <span></span>
        </div>

        <h2 className="simhastha-title">
          Sacred Ritual Services During
          <span> Simhastha Kumbh Mela 2027</span>
        </h2>

        {/* Countdown */}

        <div className="countdown">
          <div className="count-card">
            <h3>{timeLeft.days}</h3>
            <p>Days</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.hours}</h3>
            <p>Hours</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.minutes}</h3>
            <p>Minutes</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.seconds}</h3>
            <p>Seconds</p>
          </div>
        </div>

        {/* Shahi Snan */}

        <h3 className="section-heading">📅 Important Shahi Snan Dates</h3>

        <div className="timeline">
          {shahiSnan.map((item, index) => (
            <div key={index} className="timeline-card">
              <h4>{item.title}</h4>

              <p>{item.date}</p>
            </div>
          ))}
        </div>

        {/* Parva Snan */}

        <h3 className="section-heading">📜 Parva Snan Calendar</h3>

        <div className="calendar-grid">
          {parvaSnan.map((item, index) => (
            <div key={index} className="calendar-card">
              {item}
            </div>
          ))}
        </div>

        {/* Gallery */}

        <h3 className="section-heading">📷 Previous Kumbh Mela Gallery</h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="kumbh-swiper"
        >
          <SwiperSlide>
            <img src={kumbh1} alt="Kumbh Mela" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh2} alt="Ramkund" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh3} alt="Godavari Ghat" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh4} alt="Crowd" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh5} alt="Godavari Ghat Night View" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh6} alt="Sadhus" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={kumbh7} alt="Godavari Temple" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
