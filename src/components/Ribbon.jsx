import "./Ribbon.css";
import { useTranslation } from "react-i18next";

function Ribbon() {
  const { t } = useTranslation();

  const content = (
    <>
      <span>{t("ribbon.service")}</span>
      <span>•</span>

      <span>{t("ribbon.simhastha")}</span>
      <span>•</span>

      <span>{t("ribbon.pindDaan")}</span>
      <span>•</span>

      <span>{t("ribbon.asthiVisarjan")}</span>
      <span>•</span>

      <span>{t("ribbon.shraddha")}</span>
      <span>•</span>

      <span>{t("ribbon.narayanNagbali")}</span>
      <span>•</span>

      <span>{t("ribbon.tripindi")}</span>
      <span>•</span>

      <span>{t("ribbon.location")}</span>
      <span>•</span>

      <span>{t("ribbon.call")}</span>
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