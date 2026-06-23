import "./Simhastha.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

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
import simhasthaLogo from "../assets/simhasta-logo.jpg";

export default function Simhastha() {
  const { t } = useTranslation();

  const targetDate = new Date("2027-08-02T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      title: t("simhastha.dhwajarohan"),
      date: "31 October 2026",
    },
    {
      title: t("simhastha.firstSnan"),
      date: "02 August 2027",
    },
    {
      title: t("simhastha.secondSnan"),
      date: "31 August 2027",
    },
    {
      title: t("simhastha.thirdSnan"),
      date: "11 September 2027",
    },
  ];

  const parvaSnan = t("simhastha.parvaSnan", {
    returnObjects: true,
  });

  return (
    <section id="simhastha" className="simhastha">
      <div className="simhastha-container">
        <div className="simhastha-logo">
          <img src={simhasthaLogo} alt="Simhastha Kumbh Mela 2027" />
        </div>

        <div className="section-subtitle">
          <span></span>
          {t("simhastha.subtitle")}
          <span></span>
        </div>

        <h2 className="simhastha-title">
          {t("simhastha.title")}
          <span>{t("simhastha.titleHighlight")}</span>
        </h2>

        {/* Countdown */}

        <div className="countdown">
          <div className="count-card">
            <h3>{timeLeft.days}</h3>
            <p>{t("simhastha.days")}</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.hours}</h3>
            <p>{t("simhastha.hours")}</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.minutes}</h3>
            <p>{t("simhastha.minutes")}</p>
          </div>

          <div className="count-card">
            <h3>{timeLeft.seconds}</h3>
            <p>{t("simhastha.seconds")}</p>
          </div>
        </div>

        {/* Shahi Snan */}

        <h3 className="section-heading">{t("simhastha.shahiSnanHeading")}</h3>

        <div className="timeline">
          {shahiSnan.map((item, index) => (
            <div key={index} className="timeline-card">
              <h4>{item.title}</h4>
              <p>{item.date}</p>
            </div>
          ))}
        </div>

        {/* Parva Snan */}

        <h3 className="section-heading">{t("simhastha.parvaSnanHeading")}</h3>

        <div className="calendar-grid">
          {parvaSnan.map((item, index) => (
            <div key={index} className="calendar-card">
              {item}
            </div>
          ))}
        </div>

        {/* Gallery */}

        <h3 className="section-heading">{t("simhastha.galleryHeading")}</h3>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
          }}
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
