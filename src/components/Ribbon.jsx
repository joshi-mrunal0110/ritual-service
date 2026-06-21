import "./Ribbon.css";

function Ribbon() {
  const content = (
    <>
      <span>Vedic Ritual Service</span>
      <span>•</span>

      <span>🚩 Simhastha Kumbh Mela 2027 Ritual Bookings Open</span>
      <span>•</span>

      <span>🔥 Pind Daan</span>
      <span>•</span>

      <span>🙏 Asthi Visarjan</span>
      <span>•</span>

      <span>🕉️ Shraddha Vidhi</span>
      <span>•</span>

      <span>🔱 Narayan Nagbali</span>
      <span>•</span>

      <span>🌼 Tripindi Shraddha</span>
      <span>•</span>

      <span>📍 Nashik</span>
      <span>•</span>

      <span>📞 Call for Guidance</span>
      <span>•</span>
    </>
  );

  return (
    <div className="ribbon">
      <div className="ribbon-track">
        <div className="ribbon-text">{content}</div>
        <div className="ribbon-text">{content}</div>
      </div>
    </div>
  );
}

export default Ribbon;